import { useState, useEffect } from "react";

export enum MenuState {
  CLOSE,
  OPEN,
}

const animOptions: KeyframeAnimationOptions = {
  fill: "forwards",
  duration: 300,
  easing: "ease-in-out",
};

const navbarKeyframes = {
  [MenuState.OPEN]: {
    width: ["0", "7.6rem"],
    height: ["0", "17.5rem"],
    padding: ["0", "1rem 4rem 3rem 4rem"],
  },
  [MenuState.CLOSE]: {
    width: ["7.6rem", "0"],
    height: ["17.5rem", "0"],
    padding: ["1rem 4rem 3rem 4rem", "0"],
  },
};

const menuItemKeyframes = {
  [MenuState.OPEN]: {
    opacity: [0, 1],
  },
  [MenuState.CLOSE]: {
    opacity: [1, 0],
  },
};

export default function useMenuAnimation({
  navbar = { selector: "#navigation" },
  menuItem = { selector: ".js-item" },
}: UseMenuAnimationArgs = {}) {
  const [fn, setFn] = useState<
    ((args: AnimationHandlerArgs) => void) | undefined
  >();
  useEffect(() => {
    const nav = document.querySelector(navbar.selector);
    const it = Array.from(document.querySelectorAll(menuItem.selector));
    if (nav instanceof HTMLElement && it.length > 0 && !fn) {
      const nKeyframes = navbar.keyframes ?? navbarKeyframes;
      const mKeyframes = menuItem.keyframes ?? menuItemKeyframes;
      setFn(
        () => ({
          state,
          onAnimationEnd,
          options = animOptions,
        }: AnimationHandlerArgs) => {
          const nOptions = navbar.options ?? options;
          const mOptions = menuItem.options ?? options;
          switch (state) {
            case MenuState.OPEN: {
              nav.animate(nKeyframes[state], nOptions).onfinish = () => {
                let itemElAnim;
                for (const item of it) {
                  const anim = item.animate(mKeyframes[state], mOptions);
                  if (!itemElAnim) {
                    itemElAnim = anim;
                    itemElAnim.onfinish = (e) => {
                      if (typeof onAnimationEnd === "function") {
                        onAnimationEnd(e);
                      }
                    };
                  }
                }
              };
              break;
            }
            case MenuState.CLOSE: {
              let itemElAnim;
              for (const item of it) {
                const anim = item.animate(mKeyframes[state], mOptions);
                if (!itemElAnim) {
                  itemElAnim = anim;
                  itemElAnim.onfinish = () => {
                    nav.animate(nKeyframes[state], nOptions).onfinish = (e) => {
                      if (typeof onAnimationEnd === "function") {
                        onAnimationEnd(e);
                      }
                    };
                  };
                }
              }
            }
          }
        }
      );
    }
  }, [menuItem, navbar, fn]);
  return fn;
}

interface UseMenuAnimationArgs {
  readonly navbar?: {
    readonly selector: string;
    readonly keyframes?: typeof navbarKeyframes;
    readonly options?: KeyframeAnimationOptions;
  };
  readonly menuItem?: {
    readonly selector: string;
    readonly keyframes?: typeof menuItemKeyframes;
    readonly options?: KeyframeAnimationOptions;
  };
}

interface AnimationHandlerArgs {
  readonly state: MenuState;
  readonly options?: KeyframeAnimationOptions;
  readonly onAnimationEnd?: (e: AnimationPlaybackEvent) => void;
}

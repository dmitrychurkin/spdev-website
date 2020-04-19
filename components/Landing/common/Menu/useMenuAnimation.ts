import { useState, useEffect } from 'react';
export enum MenuState { CLOSE, OPEN };
const animOptions: KeyframeAnimationOptions = { fill: 'forwards', duration: 300, easing: 'ease-in-out' };
const navbarKeyframes = {
  [MenuState.OPEN]: {
    width: ['0', '7.6rem'],
    height: ['0', '17.5rem'],
    padding: ['0', '1rem 4rem 3rem 4rem']
  },
  [MenuState.CLOSE]: {
    width: ['7.6rem', '0'],
    height: ['17.5rem', '0'],
    padding: ['1rem 4rem 3rem 4rem', '0']
  }
};
const menuItemKeyframes = {
  [MenuState.OPEN]: {
    opacity: [0, 1]
  },
  [MenuState.CLOSE]: {
    opacity: [1, 0]
  }
};
function menuAnimation(navbarEl: HTMLElement, itemElArr: Array<Element>) {
  return (state: MenuState, onAnimationEnd?: (e: AnimationPlaybackEvent) => void) => {
    switch (state) {
      case MenuState.OPEN: {
        navbarEl
          .animate(navbarKeyframes[state], animOptions)
          .onfinish = () => {
            let itemElAnim;
            for (const item of itemElArr) {
              const anim = item.animate(menuItemKeyframes[state], animOptions)
              if (!itemElAnim) {
                itemElAnim = anim;
                itemElAnim.onfinish = e => {
                  if (typeof onAnimationEnd === 'function') {
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
        for (const item of itemElArr) {
          const anim = item.animate(menuItemKeyframes[state], animOptions);
          if (!itemElAnim) {
            itemElAnim = anim;
            itemElAnim.onfinish = () => {
              navbarEl
                .animate(navbarKeyframes[state], animOptions)
                .onfinish = e => {
                  if (typeof onAnimationEnd === 'function') {
                    onAnimationEnd(e);
                  }
                };
            };
          }
        }
      }
    }
  };
}
export default function useMenuAnimation(navbar = '#navigation', item = '.js-item') {
  const [fn, setFn] = useState<((state: MenuState, onanimationEnd?: (e: AnimationPlaybackEvent) => void) => void) | undefined>();
  useEffect(() => {
    const nav = document.querySelector(navbar);
    const it = Array.from(document.querySelectorAll(item));
    if (nav instanceof HTMLElement && it.length > 0 && !fn) {
      setFn(() => menuAnimation(nav, it));
    }
  }, [item, navbar, fn]);
  return fn;
}
const appState: IAppState = {
  lang: "EN"
};

export type SiteLanguage = "EN" | "RU";

export interface IAppState {
  lang: SiteLanguage;
}

export default appState;

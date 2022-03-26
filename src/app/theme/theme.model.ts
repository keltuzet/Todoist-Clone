export interface Theme {
  themeName: Themes;
  url: string;
  viewCard: {
    topBarColor: string;
    topBarTextColor: string;
    contentColor: string;
    contentTextColor: string;
    buttonColor: string;
    starColor: string;
    checkboxColor: string;
  };
}

export enum Themes {
  Primary = 'primary',
  Dark = 'dark',
}

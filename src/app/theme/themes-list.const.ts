import { Theme, Themes } from './theme.model';

export const THEME_LIST: Theme[] = [
  {
    themeName: Themes.Primary,
    url: '',
    viewCard: {
      topBarColor: 'rgb(219,76,63)',
      topBarTextColor: 'rgb(255,255,255)',
      contentColor: 'rgb(256,256,256)',
      contentTextColor: 'rgb(230,230,230)',
      buttonColor: 'rgb(219,76,63)',
      checkboxColor: 'rgb(219,76,63)',
      starColor: 'transparent',
    },
  },
  {
    themeName: Themes.Dark,
    url: '',
    viewCard: {
      topBarColor: 'rgb(40,40,40)',
      topBarTextColor: 'hsla(0,0%,100%,.87)',
      contentColor: 'rgb(31,31,31)',
      contentTextColor: 'rgba(255,255,255,0.2)',
      buttonColor: 'rgb(222,76,58)',
      checkboxColor: 'rgb(222,76,58)',
      starColor: 'transparent',
    },
  },
];

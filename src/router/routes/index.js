import game from './game';
import home from './home';

export default [
  home,
  game,
  { path: '*', redirect: '/' },
];

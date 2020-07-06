import title from './title';

const middlware = [
  title,
];

export default function exec(router) {
  middlware.forEach((guard) => router.beforeEach(guard));
}

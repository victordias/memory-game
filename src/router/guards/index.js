import title from './title';

const middleware = [
  title,
];

/**
 * Execute the vue guards middleware
 * @param {VueRouterInstance} router router
 */
export default function exec(router) {
  middleware.forEach((guard) => router.beforeEach(guard));
}

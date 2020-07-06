export default function (to, _from, next) {
  const { meta: { title } } = to.matched.find(({ meta }) => meta.title);

  if (title) {
    document.title = `${title} - Jogo da Memória`;
  }
  next();
}

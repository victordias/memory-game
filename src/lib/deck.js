/**
 * Suffle a card list
 * @param {Array} cards list of cards
 * @returns a list of suffled cards
 */
function suffle(cards) {
  const deck = cards;
  const cutDeckVariant = deck.length / 2 + Math.floor(Math.random() * 9) - 4;
  const leftHalf = deck.splice(0, cutDeckVariant);
  let leftCount = leftHalf.length;
  let rightCount = deck.length - Math.floor(Math.random() * 4);

  while (leftCount > 0) {
    const takeAmount = Math.floor(Math.random() * 4);
    deck.splice(rightCount, 0, ...leftHalf.splice(leftCount, takeAmount));
    leftCount -= takeAmount;
    rightCount = rightCount - Math.floor(Math.random() * 4) + takeAmount;
  }

  deck.splice(rightCount, 0, ...leftHalf);

  return deck;
}

/**
 * build a paired card list
 * @returns list of cards
 */
function build() {
  const cards = [];

  for (let j = 0; j < 2; j += 1) {
    for (let i = 1; i <= 10; i += 1) {
      cards.push({
        id: String(Date.now() * Math.random()),
        image: `/cards/${i}.svg`,
        active: false,
        value: i,
        hit: false,
      });
    }
  }
  return suffle(cards);
}

export default {
  build,
  suffle,
};

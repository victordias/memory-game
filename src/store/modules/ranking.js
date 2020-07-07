export default {
  state: () => ({
    plays: [],
  }),

  getters: {
    topPlayers(state) {
      let { length } = state.plays;
      if (length > 10) length = 10;

      return state.plays.sort((a, b) => a.rounds - b.rounds)
        .splice(0, length);
    },
  },

  mutations: {
    SAVE_STATS(state, { player, rounds }) {
      state.plays.push({
        player,
        rounds,
      });
    },
  },

  namespaced: true,
};

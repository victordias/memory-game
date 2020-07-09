export default {
  state: () => ({
    plays: [],
  }),

  getters: {
    /**
     * Get the first 10th players
     * @param {VuexState} state state
     */
    topPlayers(state) {
      let { length } = state.plays;
      if (length > 10) length = 10;

      return state.plays.sort((a, b) => a.rounds - b.rounds)
        .splice(0, length);
    },
  },

  mutations: {
    /**
     * Save the game stats
     * @param {VuexState} state state
     * @param {String} player player name
     * @param {Number} rounds rounds
     */
    SAVE_STATS(state, { player, rounds }) {
      state.plays.push({
        player,
        rounds,
      });
    },
  },

  namespaced: true,
};

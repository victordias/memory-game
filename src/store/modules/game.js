import Deck from '@/lib/deck';
import Vue from 'vue';

export default {
  state: () => ({
    player: null,
    round: 0,
    cards: Deck.build(),
    selections: [],
  }),

  mutations: {
    /**
     * Add a card to selections and check if
     * two cards select is the same.
     *
     * if true, keep cards active state
     * if false, flip both card to initial state
     *
     * finally increment round counter
     * @param {VuexState} state state
     * @param {Number} idx card index
     */
    ADD_CARD_TO_SELECTIONS(state, idx) {
      // add only two cards to selections
      if (state.selections.length <= 1 && !state.selections.includes(idx)) {
        Vue.set(state.cards[idx], 'active', true);
        state.selections.push(idx);
      }

      if (state.selections.length === 2) {
        const [i, j] = state.selections;
        const value = state.cards[i].value === state.cards[j].value;
        const timeout = value ? 0 : 800;
        const attribute = value ? 'hit' : 'active';

        setTimeout(() => {
          state.selections.forEach((id) => {
            Vue.set(state.cards[id], attribute, value);
            state.cards[id][attribute] = value;
          });
          state.selections = [];
          this.commit('game/INCREMENT_ROUND');
        }, timeout);
      }
    },

    /**
     * Increase round counter
     * @param {VuexState} state state
     */
    INCREMENT_ROUND(state) {
      state.round += 1;
    },

    /**
     * Set current player
     * @param {VuexState} state state
     * @param {String} name player name
     */
    SET_PLAYER_NAME(state, name) {
      state.player = name;
    },

    /**
     * Reset game variables, to initial values
     * @param {VuexState} state state
     */
    RESET(state) {
      state.player = '';
      state.round = 0;
      state.selections = [];
      state.cards = Deck.build();
    },
  },

  namespaced: true,
};

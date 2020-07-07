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
    ADD_CARD_TO_SELECTIONS(state, idx) {
      // add only two cards to selections
      if (state.selections.length <= 1) {
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
    INCREMENT_ROUND(state) {
      state.round += 1;
    },
    SET_PLAYER_NAME(state, name) {
      state.player = name;
    },
    RESET(state) {
      state.player = '';
      state.round = 0;
      state.selections = [];
      state.cards = Deck.build();
    },
  },

  namespaced: true,
};

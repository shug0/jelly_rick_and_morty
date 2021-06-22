import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { API_ROUTES_CHARACTERS } from "@/constants/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: 1,
    characters: [],
    soloCharacter: null,
  },
  mutations: {
    SET_CHARACTERS(state, payload) {
      state.characters = [...payload];
    },
    CLEAR_SOLO_CHARACTER(state) {
      state.soloCharacter = null;
    },
    SET_SOLO_CHARACTER(state, newCharacter) {
      state.soloCharacter = newCharacter;
    },
    INCREMENT_PAGE(state) {
      state.currentPage++;
    },
    DECREMENT_PAGE(state) {
      if (state.currentPage > 1) {
        state.currentPage--;
      }
    },
  },
  actions: {
    resetCharacter({ commit }) {
      commit("CLEAR_SOLO_CHARACTER");
    },
    getCharacter({ commit }, characterId) {
      axios.get(`${API_ROUTES_CHARACTERS}/${characterId}`).then(({ data }) => {
        commit("SET_SOLO_CHARACTER", data);
      });
    },
    getCharacters({ commit, state }) {
      axios
        .get(API_ROUTES_CHARACTERS, { params: { page: state.currentPage } })
        .then(({ data }) => {
          commit("SET_CHARACTERS", data.results);
        });
    },
    goNextPage({ commit, dispatch }) {
      commit("INCREMENT_PAGE");
      dispatch("getCharacters");
    },
    goPreviousPage({ commit, dispatch }) {
      commit("DECREMENT_PAGE");
      dispatch("getCharacters");
    },
  },
  modules: {},
});

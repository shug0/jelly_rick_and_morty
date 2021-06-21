import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { API_ROUTES_CHARACTERS } from "@/constants/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: 1,
    characters: [],
  },
  mutations: {
    SET_CHARACTERS(state, payload) {
      state.characters = [...payload];
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

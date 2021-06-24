import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { API_ROUTES_CHARACTERS } from "@/constants/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: 1,
    filters: null,
    characters: [],
    charactersInfos: null,
    soloCharacter: null,
  },
  mutations: {
    SET_INFOS(state, payload) {
      state.charactersInfos = payload;
    },
    SET_CHARACTERS(state, payload) {
      state.characters = [...payload];
    },
    CLEAR_SOLO_CHARACTER(state) {
      state.soloCharacter = null;
    },
    SET_SOLO_CHARACTER(state, newCharacter) {
      state.soloCharacter = newCharacter;
    },
    SET_PAGE(state, newPage) {
      state.currentPage = newPage;
    },
    INCREMENT_PAGE(state) {
      state.currentPage++;
    },
    DECREMENT_PAGE(state) {
      if (state.currentPage > 1) {
        state.currentPage--;
      }
    },
    SET_FILTERS(state, payload) {
      state.filters = { ...state.filters, ...payload };
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
        .get(API_ROUTES_CHARACTERS, {
          params: { page: state.currentPage, ...state.filters },
        })
        .then(({ data }) => {
          commit("SET_CHARACTERS", data.results);
          commit("SET_INFOS", data.info);
        })
        .catch(() => {
          commit("SET_CHARACTERS", []);
        });
    },
    filterResult({ commit, dispatch }, { target }) {
      const filterName = target.name;
      const filterValue = target.type === "radio" ? target.id : target.value;
      commit("SET_PAGE", 1);
      commit("SET_FILTERS", { [filterName]: filterValue });
      dispatch("getCharacters");
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

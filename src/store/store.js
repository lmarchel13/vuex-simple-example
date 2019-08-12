import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return `${state.counter} clicks`;
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    }
  },
  actions: {
    // increment: context => {
    increment: ({ commit }, payload) => {
      const { step, delay } = payload;
      setTimeout(() => {
        // context.commit("increment");
        commit("increment", step);
      }, delay);
    },
    decrement: ({ commit }, payload) => {
      const { step, delay } = payload;
      setTimeout(() => {
        commit("decrement", step);
      }, delay);
    }
  }
});

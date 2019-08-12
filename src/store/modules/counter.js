import * as types from "../types";
import { type } from "os";

const state = {
  counter: 0
};

const getters = {
  // getCounter: state => {
  [types.GET_COUNTER]: state => {
    return state.counter;
  },
  [types.DOUBLE_COUNTER]: state => {
    return state.counter * 2;
  },
  [types.CLICK_COUNTER]: state => {
    return `${state.counter} clicks`;
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
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
};

export default {
  state,
  getters,
  mutations,
  actions
};

import * as types from "../types";

const state = {
  counter: 0
};

const getters = {
  // getCounter: state => {
  [types.GETTER_GET_COUNTER]: state => {
    return state.counter;
  },
  [types.GETTER_DOUBLE_COUNTER]: state => {
    return state.counter * 2;
  },
  [types.GETTER_CLICK_COUNTER]: state => {
    return `${state.counter} clicks`;
  }
};

const mutations = {
  [types.MUTATION_INCREMENT_COUNTER]: (state, payload) => {
    state.counter += payload;
  },
  [types.MUTATION_DECREMENT_COUNTER]: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  // increment: context => {
  [types.ACTION_INCREMENT_COUNTER]: ({ commit }, payload) => {
    const { step, delay } = payload;
    setTimeout(() => {
      // context.commit("increment");
      commit(types.MUTATION_INCREMENT_COUNTER, step);
    }, delay);
  },
  [types.ACTION_DECREMENT_COUNTER]: ({ commit }, payload) => {
    const { step, delay } = payload;
    setTimeout(() => {
      commit(types.MUTATION_DECREMENT_COUNTER, step);
    }, delay);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

const state = {
  counter: 0
};

const getters = {
  getCounter: state => {
    return state.counter;
  },
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
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

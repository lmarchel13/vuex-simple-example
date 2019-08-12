state = {
  value: 0
};

getters = {
  value: state => {
    return state.value;
  }
};

mutations = {
  updateValue: (state, payload) => {
    state.value = payload;
  }
};

actions = {
  updateValue: ({ commit }, payload) => {
    commit("updateValue", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

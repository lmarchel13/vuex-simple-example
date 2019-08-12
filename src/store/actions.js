import * as types from "./types";
// Default actions with no modules

export default {
  [types.ACTION_UPDATE_VALUE]: ({ commit }, payload) => {
    commit(types.MUTATION_UPDATE_VALUE, payload);
  }
};

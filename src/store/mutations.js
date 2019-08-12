import * as types from "./types";
// Default mutations with no modules

export default {
  [types.MUTATION_UPDATE_VALUE]: (state, payload) => {
    state.value = payload;
  }
};

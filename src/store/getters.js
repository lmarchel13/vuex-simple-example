import * as types from "./types";

// Default getters with no modules

export default {
  [types.GETTER_GET_VALUE]: state => {
    return state.value;
  }
};

<template>
  <div>
    <button class="btn btn-primary" @click="increment(5)">Increment</button>
    <button class="btn btn-primary" @click="decrement(5)">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import * as types from "../store/types";

export default {
  methods: {
    ...mapMutations({
      increment: types.MUTATION_INCREMENT_COUNTER,
      decrement: types.MUTATION_DECREMENT_COUNTER
    })
  }
};
</script>
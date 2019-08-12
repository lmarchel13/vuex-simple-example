<template>
  <div>
    <button class="btn btn-primary" @click="increment({step: 13, delay: 2000})">Increment</button>
    <button class="btn btn-primary" @click="decrement({step: 13, delay: 2000}) ">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import * as types from "../store/types";

export default {
  methods: {
    ...mapActions({
      increment: types.ACTION_INCREMENT_COUNTER,
      decrement: types.ACTION_DECREMENT_COUNTER
    })
  }
};
</script>
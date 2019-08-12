<template>
  <div>
    <button class="btn btn-primary" @click="increment({step: 13, delay: 2000})">Increment</button>
    <button class="btn btn-primary" @click="decrement({step: 13, delay: 2000}) ">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      increment: "increment",
      decrement: "decrement"
    })
  }
};
</script>
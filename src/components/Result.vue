<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
import * as types from "../store/types";

const { GET_COUNTER } = types;

export default {
  computed: {
    counter() {
      return this.$store.getters[GET_COUNTER];
    }
  }
};
</script>
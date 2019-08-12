<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
import * as types from "../store/types";

const { GETTER_GET_COUNTER } = types;

export default {
  computed: {
    counter() {
      return this.$store.getters[GETTER_GET_COUNTER];
    }
  }
};
</script>
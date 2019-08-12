<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Number of clicks: {{clicks}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";

const { GET_COUNTER, CLICK_COUNTER } = types;

export default {
  computed: {
    ...mapGetters({
      counter: GET_COUNTER,
      clicks: CLICK_COUNTER
    })
  }
};
</script>
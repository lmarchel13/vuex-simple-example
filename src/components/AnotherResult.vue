<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Number of clicks: {{clicks}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";

const { GETTER_GET_COUNTER, GETTER_CLICK_COUNTER } = types;

export default {
  computed: {
    ...mapGetters({
      counter: GETTER_GET_COUNTER,
      clicks: GETTER_CLICK_COUNTER
    })
  }
};
</script>
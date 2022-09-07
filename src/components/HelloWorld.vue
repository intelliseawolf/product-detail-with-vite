<template>
  <div class="hello">
    <h1 v-text="msg" />
  </div>
</template>

<script lang="ts">
import { defineComponent, type SetupContext } from "vue";

/** HelloWorld Component */
export default defineComponent({
  props: {
    /** Prop message */
    msg: { type: String, required: true },
  },
  /**
   * Setup
   *
   * @param _props - Props
   * @param _context - Context
   */
  setup(_props, _context: SetupContext) {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

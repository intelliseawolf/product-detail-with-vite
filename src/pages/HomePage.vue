<template>
  <div class="home">
    <img
      alt="Vue logo"
      :src="require('@/assets/logo.svg')"
      height="200"
      width="200"
    />
    <hello-world msg="Vite SSR App with vue-server-renderer" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref, type SetupContext } from "vue";

import HelloWorld from "@/components/HelloWorld.vue";

/** Home Component */
export default defineComponent({
  /** Components */
  components: {
    HelloWorld,
  },
  /** Props */
  props: {
    prop: { type: String, default: "prop" },
  },
  /**
   * Setup
   *
   * @param _props - Props
   * @param _context - Context
   */
  setup(_props, _context: SetupContext) {
    const data: Ref<string | undefined> = ref();

    return {
      data,
    };
  },
});
</script>

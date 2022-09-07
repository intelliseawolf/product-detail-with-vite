<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/product/1">Product</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, type SetupContext } from "vue";

/** App Component */
export default defineComponent({
  /**
   * Setup
   *
   * @param _props - Props
   * @param _context - Context
   */
  setup(_props, _context: SetupContext) {
    // document.title = import.meta.env.VITE_APP_TITLE || 'Vue APP';
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import PuzzleContainer from "./components/PuzzleContainer/PuzzleContainer.vue";
import AppBar from "./components/AppBar.vue";

export default {
  name: "App",
  components: {
    AppBar,
    PuzzleContainer,
  },
};
</script>

<template>
  <main>
    <div class="app">
      <AppBar />
      <PuzzleContainer />
    </div>
  </main>
</template>

<style>
@import "./assets/base.css";

.app {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

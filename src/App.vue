<script>
import PuzzleContainer from "./components/PuzzleContainer/PuzzleContainer.vue";

export default {
  name: "App",
  components: {
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

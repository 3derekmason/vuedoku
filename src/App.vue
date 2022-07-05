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
    <AppBar />
    <PuzzleContainer />
  </main>
</template>

<style>
@import "./assets/base.css";

main {
  display: grid;
  place-content: center;
}
</style>

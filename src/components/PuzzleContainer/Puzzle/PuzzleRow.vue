<script>
import PuzzleCell from "./PuzzleCell.vue";

export default {
  name: "PuzzleRow",
  components: {
    PuzzleCell,
  },
};
</script>

<template>
  <div class="puzzleRow">
    <PuzzleCell />
    <PuzzleCell />
    <PuzzleCell />
    <PuzzleCell />
    <PuzzleCell />
    <PuzzleCell />
    <PuzzleCell />
    <PuzzleCell />
    <PuzzleCell />
  </div>
</template>

<style scoped>
.puzzleRow {
  width: 100%;
  height: calc(100% / 9);
  border: 0.5px solid #ffffff60;
  display: flex;
}
</style>

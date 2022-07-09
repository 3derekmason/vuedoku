<script>
import PuzzleCell from "./PuzzleCell.vue";

export default {
  name: "PuzzleRow",
  components: {
    PuzzleCell,
  },
  props: {
    rowData: Array,
  },
};
</script>

<template>
  <div class="puzzleRow">
    <PuzzleCell v-for="i in rowData" :key="i" :value="i" />
  </div>
</template>

<style scoped>
.puzzleRow {
  width: 100%;
  height: calc(100% / 9);
  border: 0.5px solid #ffffff80;
  display: flex;
}
.puzzleRow:nth-child(3n) {
  border-bottom: 1px solid #efefef;
}
</style>

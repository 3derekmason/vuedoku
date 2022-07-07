<script>
import PuzzleCell from "./PuzzleCell.vue";

export default {
  name: "PuzzleRow",
  components: {
    PuzzleCell,
  },
  props: {
    rowData: Array,
    rowIndex: Number,
    activeValue: Number,
    toggleActive: Function,
    completeBoard: Array,
    editBoard: Function,
  },
};
</script>

<template>
  <div class="puzzleRow">
    <PuzzleCell
      v-for="(digit, i) in rowData"
      :key="i"
      :completeBoard="completeBoard"
      :editBoard="editBoard"
      :rowIndex="rowIndex"
      :cellIndex="i"
      :value="digit"
      :activeValue="activeValue"
      :toggleActive="toggleActive"
    />
  </div>
</template>

<style scoped>
.puzzleRow {
  width: 100%;
  height: calc(100% / 9);
  border: 0.5px solid var(--font-teal-transparent);
  display: flex;
}
.puzzleRow:nth-child(3n) {
  border-bottom: 1px solid var(--font-teal);
}
</style>

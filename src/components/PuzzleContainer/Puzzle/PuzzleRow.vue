<script>
import PuzzleCell from "./PuzzleCell.vue";

export default {
  name: "PuzzleRow",
  components: {
    PuzzleCell,
  },
  props: {
    rowData: Array,
    activeValue: Number,
    toggleActive: Function,
  },
};
</script>

<template>
  <div class="puzzleRow">
    <PuzzleCell
      v-for="i in rowData"
      :key="i"
      :value="i"
      :setValue="
        (n) => {
          i = n;
        }
      "
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

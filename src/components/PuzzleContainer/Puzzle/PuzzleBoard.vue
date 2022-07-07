<script>
import PuzzleRow from "./PuzzleRow.vue";
import validateGameBoard from "../../util/validateGameBoard";
export default {
  name: "PuzzleBoard",
  components: {
    PuzzleRow,
  },
  props: {
    activeValue: Number,
    toggleActive: Function,
    originalBoard: Array,
    completeBoard: Array,
    editBoard: Function,
  },
  methods: {
    validation(boardArray) {
      return validateGameBoard(boardArray);
    },
  },
};
</script>

<template>
  <div v-if="this.validation(completeBoard)" class="puzzleBoard">
    <h1>Great Job!</h1>
  </div>

  <div v-else class="puzzleBoard">
    <PuzzleRow
      v-for="(row, i) in completeBoard"
      :originalBoard="originalBoard"
      :completeBoard="completeBoard"
      :editBoard="editBoard"
      :key="i"
      :rowIndex="i"
      :rowData="row"
      :activeValue="activeValue"
      :toggleActive="toggleActive"
    />
  </div>
</template>

<style scoped>
.puzzleBoard {
  width: 400px;
  aspect-ratio: 1/1;
  background: #ffffff20;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 0 4px var(--font-teal-transparent);
}
.puzzleBoard h1 {
  width: 100%;
  height: 100%;
  font-size: 64px;
  display: grid;
  place-content: center;
}
</style>

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
  },
  data() {
    return {
      // completeBoard: [
      //   [3, 9, 1, 2, 8, 6, 5, 7, 4],
      //   [4, 8, 7, 3, 5, 9, 1, 2, 6],
      //   [6, 5, 2, 7, 1, 4, 8, 3, 9],
      //   [8, 7, 5, 4, 3, 1, 6, 9, 2],
      //   [2, 1, 3, 9, 6, 7, 4, 8, 5],
      //   [9, 6, 4, 5, 2, 8, 7, 1, 3],
      //   [1, 4, 9, 6, 7, 3, 2, 5, 8],
      //   [5, 3, 8, 1, 4, 2, 9, 6, 7],
      //   [7, 2, 6, 8, 9, 5, 3, 4, 1],
      // ],
      originalBoard: [
        [3, 0, 1, 0, 8, 0, 5, 7, 0],
        [0, 8, 7, 3, 5, 9, 1, 0, 0],
        [0, 0, 2, 7, 0, 4, 0, 0, 0],
        [8, 0, 5, 4, 0, 0, 6, 9, 0],
        [2, 1, 0, 9, 6, 0, 0, 0, 0],
        [0, 0, 4, 0, 0, 8, 7, 1, 0],
        [0, 0, 9, 6, 7, 3, 0, 5, 8],
        [5, 3, 0, 1, 4, 2, 9, 6, 7],
        [0, 0, 0, 0, 9, 0, 3, 4, 0],
      ],
      completeBoard: [
        [3, 0, 1, 0, 8, 0, 5, 7, 0],
        [0, 8, 7, 3, 5, 9, 1, 0, 0],
        [0, 0, 2, 7, 0, 4, 0, 0, 0],
        [8, 0, 5, 4, 0, 0, 6, 9, 0],
        [2, 1, 0, 9, 6, 0, 0, 0, 0],
        [0, 0, 4, 0, 0, 8, 7, 1, 0],
        [0, 0, 9, 6, 7, 3, 0, 5, 8],
        [5, 3, 0, 1, 4, 2, 9, 6, 7],
        [0, 0, 0, 0, 9, 0, 3, 4, 0],
      ],
    };
  },
  methods: {
    editBoard(position, newValue) {
      this.completeBoard[position[0]][position[1]] = newValue;
    },
    validation(boardArray) {
      return validateGameBoard(boardArray);
    },
  },
};
</script>

<template>
  <div v-if="this.validation(this.completeBoard)" class="puzzleBoard">
    <h1>Great Job!</h1>
  </div>

  <div v-else class="puzzleBoard">
    <PuzzleRow
      v-for="(row, i) in completeBoard"
      :originalBoard="this.originalBoard"
      :completeBoard="this.completeBoard"
      :editBoard="this.editBoard"
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

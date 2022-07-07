<script>
import countNInBoard from "../util/countNInBoard";

import PuzzleBoard from "./Puzzle/PuzzleBoard.vue";
import PuzzleControls from "./PuzzleControls/PuzzleControls.vue";
export default {
  name: "PuzzleContainer",
  components: {
    PuzzleBoard,
    PuzzleControls,
  },
  data() {
    return {
      activeValue: 0,
      // completeBoard: [
      //   [3, 9, 1, 0, 8, 6, 5, 7, 4],
      //   [4, 8, 7, 3, 0, 9, 1, 2, 6],
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
    countNInBoard: countNInBoard,
    toggleActive(input) {
      if (this.countNInBoard(input, this.completeBoard) === 8) {
        this.activeValue = 0;
      } else {
        this.activeValue = input;
      }
    },
    editBoard(position, newValue) {
      this.completeBoard[position[0]][position[1]] = newValue;
    },
    resetBoard() {
      this.originalBoard.forEach((row, i) => {
        row.forEach((value, j) => {
          this.editBoard([i, j], value);
        });
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <PuzzleBoard
      :activeValue="this.activeValue"
      :toggleActive="this.toggleActive"
      :originalBoard="this.originalBoard"
      :completeBoard="this.completeBoard"
      :editBoard="this.editBoard"
    />
    <PuzzleControls
      :activeValue="this.activeValue"
      :toggleActive="this.toggleActive"
      :originalBoard="this.originalBoard"
      :completeBoard="this.completeBoard"
      :editBoard="this.editBoard"
      :resetBoard="this.resetBoard"
    />
  </div>
</template>

<style scoped>
.container {
  background: var(--bg-teal-mute);
  width: 800px;
  height: calc(100vh - 88px);
  border-left: 0.5px solid #ffffff80;
  border-right: 0.5px solid #ffffff80;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>

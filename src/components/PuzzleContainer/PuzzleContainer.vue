<script>
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
      originalBoard: [
        [0, 9, 1, 2, 8, 6, 5, 0, 4],
        [4, 0, 7, 0, 5, 9, 0, 2, 6],
        [0, 0, 2, 7, 0, 4, 0, 0, 9],
        [8, 7, 0, 4, 0, 0, 0, 9, 0],
        [0, 1, 3, 9, 0, 7, 0, 8, 0],
        [0, 6, 0, 0, 0, 8, 7, 1, 0],
        [1, 0, 0, 0, 0, 3, 2, 5, 0],
        [5, 0, 8, 0, 4, 2, 0, 6, 0],
        [0, 2, 6, 0, 9, 0, 3, 4, 1],
      ],
      completeBoard: [
        [3, 1, 9, 2, 8, 6, 5, 7, 4],
        [4, 8, 7, 3, 5, 9, 1, 2, 6],
        [6, 5, 2, 7, 1, 4, 8, 3, 9],
        [8, 7, 5, 4, 3, 1, 6, 9, 2],
        [2, 1, 3, 9, 6, 7, 4, 8, 5],
        [9, 6, 4, 5, 2, 8, 7, 1, 3],
        [1, 4, 9, 6, 7, 3, 2, 5, 8],
        [5, 3, 8, 1, 4, 2, 9, 6, 7],
        [7, 2, 6, 8, 9, 5, 3, 4, 1],
      ],
    };
  },
  methods: {
    toggleActive(input) {
      this.activeValue = input;
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
      :originalBoard="this.originalBoard"
      :completeBoard="this.completeBoard"
      :editBoard="this.editBoard"
      :activeValue="this.activeValue"
      :toggleActive="this.toggleActive"
    />
    <PuzzleControls
      :activeValue="this.activeValue"
      :toggleActive="this.toggleActive"
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

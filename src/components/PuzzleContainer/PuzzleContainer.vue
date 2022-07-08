<script>
import countNInBoard from "../util/countNInBoard";

import PuzzleBoard from "./Puzzle/PuzzleBoard.vue";
import PuzzleControls from "./PuzzleControls/PuzzleControls.vue";

import GameTimer from "./GameTimer.vue";

export default {
  name: "PuzzleContainer",
  components: {
    PuzzleBoard,
    PuzzleControls,
    GameTimer,
  },
  data() {
    return {
      activeValue: 0,
      startingTime: new Date().getTime(),
      currentTime: new Date().getTime(),
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

    startTimer() {
      this.currentTime = new Date().getTime();
      console.log(Math.floor((this.currentTime - this.startingTime) / 1000));

      // this.currentTime = newTime.getUTCSeconds();
    },
    toggleActive(input) {
      if (this.countNInBoard(input, this.completeBoard) >= 9) {
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
  mounted() {
    setInterval(this.startTimer, 1000);
  },
};
</script>

<template>
  <div class="container">
    <GameTimer
      :currentTime="Math.floor((this.currentTime - this.startingTime) / 1000)"
    />
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

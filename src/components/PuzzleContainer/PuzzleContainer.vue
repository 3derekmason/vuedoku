<script>
import countNInBoard from "../util/countNInBoard";
import validateGameBoard from "../util/validateGameBoard";

import PuzzleBoard from "./Puzzle/PuzzleBoard.vue";
import PuzzleControls from "./PuzzleControls/PuzzleControls.vue";
import GameTimer from "./GameTimer.vue";

const api = "http://vuedoku-api.herokuapp.com/api/";

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
      currentTime: 0,
      completeTime: 0,
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
      if (validateGameBoard(this.completeBoard)) {
        this.stopTimer();
      } else {
        this.currentTime++;
      }
    },
    stopTimer() {
      this.completeTime = this.currentTime;
    },
    toggleActive(input) {
      return this.countNInBoard(input, this.completeBoard) >= 9
        ? (this.activeValue = 0)
        : (this.activeValue = input);
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
    getAllBoards() {
      fetch(api)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    getRandomBoard() {
      fetch(api + "random")
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    getDifficulty(string) {
      fetch(api + string)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
  mounted() {
    setInterval(this.startTimer, 1000);
  },
};
</script>

<template>
  <div class="container">
    <GameTimer :currentTime="this.currentTime" />
    <PuzzleBoard
      :activeValue="this.activeValue"
      :toggleActive="this.toggleActive"
      :originalBoard="this.originalBoard"
      :completeBoard="this.completeBoard"
      :editBoard="this.editBoard"
      :completeTime="this.completeTime"
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
  width: 800px;
  height: calc(100vh - 88px);
  background: var(--bg-teal-mute);
  border-left: 0.5px solid #ffffff80;
  border-right: 0.5px solid #ffffff80;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>

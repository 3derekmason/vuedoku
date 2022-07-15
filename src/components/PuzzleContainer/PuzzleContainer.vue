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
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      completeBoard: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    buildGameBoard(game_board) {
      this.originalBoard = game_board;
      game_board.forEach((row, i) => {
        row.forEach((value, j) => {
          this.editBoard([i, j], value);
        });
      });
    },
    getRandomBoard() {
      fetch(api + "random")
        .then((response) => response.json())
        .then((data) => {
          this.buildGameBoard(data.game_board);
        });
    },
    getDifficulty(string) {
      fetch(api + string)
        .then((response) => response.json())
        .then((data) => {
          const index = Math.floor(Math.random() * data.length);
          this.buildGameBoard(data?.[index].game_board);
          this.currentTime = 0;
        });
    },
  },
  mounted() {
    this.getRandomBoard();
    setInterval(this.startTimer, 1000);
  },
};
</script>

<template>
  <div class="container">
    <div class="difficulty">
      <p>Choose puzzle difficulty:</p>
      <button @click="this.getDifficulty('easy')">Easy</button>
      <button @click="this.getDifficulty('medium')">Medium</button>
      <button @click="this.getDifficulty('hard')">Hard</button>
    </div>
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
.difficulty {
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.difficulty button {
  height: 32px;
  border: 0.5px solid #ffffff80;
  border-radius: 4px;
  background: transparent;
  color: var(--color-font-teal);
}
.difficulty button:hover {
  color: var(--color-selected);
  cursor: pointer;
}
.difficulty button:active {
  border: 0.5px solid var(--color-selected);
}

@media only screen and (max-width: 600px) {
  .difficulty {
    font-size: 10px;
  }
  .difficulty button {
    height: 24px;
  }
}
</style>

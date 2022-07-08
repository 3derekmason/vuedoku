<script>
import PuzzleRow from "./PuzzleRow.vue";
import validateGameBoard from "../../util/validateGameBoard";
import boardIsFull from "../../util/boardIsFull";
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
    completeTime: Number,
  },
  methods: {
    boardIsFull: boardIsFull,
    validation(boardArray) {
      return validateGameBoard(boardArray);
    },
  },
};
</script>

<template>
  <div v-if="this.validation(completeBoard)" class="puzzleBoard">
    <div class="congrats">
      <h1>Great Job!</h1>
      <h4>Time to completion:</h4>
      <h4>
        {{ Math.floor(this.completeTime / 60) }} minutes and
        {{ Math.floor(this.completeTime % 60) }} seconds.
      </h4>
    </div>
  </div>
  <div v-else-if="this.boardIsFull(completeBoard)" class="puzzleBoard">
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
      :style="{ boxShadow: '0 2px 4px #D50000' }"
    />
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
.puzzleBoard .congrats {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  animation: fadeIn 1s;
}
.congrats h1 {
  font-size: 64px;
}
.congrats h4 {
  text-align: center;
}

h4:nth-child(3n) {
  color: var(--color-selected);
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

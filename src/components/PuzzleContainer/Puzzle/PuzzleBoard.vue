<script>
import validateGameBoard from "../../util/validateGameBoard";
import boardIsFull from "../../util/boardIsFull";
import PuzzleRow from "./PuzzleRow.vue";

export default {
  name: "PuzzleBoard",
  components: {
    PuzzleRow,
  },
  props: {
    originalBoard: Array,
    completeBoard: Array,
    editBoard: Function,
    activeValue: Number,
    toggleActive: Function,
  },
  methods: {
    validateGameBoard: validateGameBoard,
    boardIsFull: boardIsFull,
  },
};
</script>

<template>
  <div v-if="validateGameBoard(completeBoard)" class="puzzleBoard">
    <div class="congrats">
      <h1>Great Job!</h1>
    </div>
  </div>
  <div v-else-if="boardIsFull(completeBoard)" class="puzzleBoard">
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
  box-shadow: 0 0 4px #ffffff80;
}

.congrats {
  text-align: center;
  font-size: 64;
  width: 100%;
}
</style>

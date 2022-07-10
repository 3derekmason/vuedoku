<script>
import countNInBoard from "../../util/countNInBoard";
export default {
  name: "PuzzleCell",
  props: {
    value: Number,
    rowIndex: Number,
    cellIndex: Number,
    activeValue: Number,
    toggleActive: Function,
    originalBoard: Array,
    completeBoard: Array,
    editBoard: Function,
  },
  methods: {
    countNInBoard: countNInBoard,
    editCell() {
      if (this.activeValue) {
        this.editBoard([this.rowIndex, this.cellIndex], this.activeValue);
        if (this.countNInBoard(this.activeValue, this.completeBoard) >= 9) {
          this.toggleActive(0);
        }
      } else if (this.activeValue === 0) {
        this.editBoard([this.rowIndex, this.cellIndex], 0);
      } else {
        console.error(new Error("No number has been selected"));
      }
    },
    disableOriginal() {
      return this.originalBoard[this.rowIndex][this.cellIndex] !== 0;
    },
  },
};
</script>

<template>
  <button
    class="puzzleCell"
    :disabled="this.disableOriginal()"
    @click="
      () => {
        editCell();
      }
    "
  >
    <h1>{{ value === 0 ? "" : value }}</h1>
  </button>
</template>

<style scoped>
.puzzleCell {
  height: 100%;
  width: calc(100% / 9);
  border: 0.5px solid #ffffff80;
  display: grid;
  place-content: center;
  background: #212121;
}
.puzzleCell:nth-child(3n) {
  border-right: 1px solid #efefef;
}
.puzzleCell:hover {
  cursor: pointer;
  border: 1px solid #ffffff;
}
.puzzleCell h1 {
  font-size: 24px;
  color: #efefef;
}
</style>

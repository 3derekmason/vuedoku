<script>
export default {
  name: "PuzzleCell",
  props: {
    value: Number,
    rowIndex: Number,
    cellIndex: Number,
    activeValue: Number,
    toggleActive: Function,
    completeBoard: Array,
    originalBoard: Array,
    editBoard: Function,
  },
  methods: {
    editCell() {
      if (this.activeValue) {
        this.editBoard([this.rowIndex, this.cellIndex], this.activeValue);
      } else {
        console.error(new Error("No number has been selected"));
      }
    },
    disableOriginal() {
      if (this.originalBoard[this.rowIndex][this.cellIndex] !== 0) {
        return true;
      }
      return false;
    },
  },
};
</script>

<template>
  <button
    :disabled="this.disableOriginal()"
    class="puzzleCell"
    @click="
      () => {
        return disableOriginal() ? false : editCell();
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
  background: var(--bg-teal);
}
.puzzleCell:nth-child(3n) {
  border-right: 1px solid var(--font-teal);
}
.puzzleCell:hover {
  cursor: pointer;
  border: 1px solid #ffffff;
}
.puzzleCell:active {
  border: 1px solid var(--color-selected);
}
.puzzleCell h1 {
  font-weight: 200;
  font-size: 24px;
  color: var(--font-white);
}
.puzzleCell:disabled h1 {
  font-weight: 800;
  color: var(--color-disabled);
}
</style>

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
    editBoard: Function,
  },
  methods: {
    editCell() {
      if (this.activeValue) {
        this.editBoard([this.rowIndex, this.cellIndex], this.activeValue);
      } else console.error(new Error("No number has been selected"));
    },
  },
};
</script>

<template>
  <div class="puzzleCell" @click="editCell">
    <h1>{{ value === 0 ? "" : value }}</h1>
  </div>
</template>

<style scoped>
.puzzleCell {
  height: 100%;
  width: calc(100% / 9);
  border: 0.5px solid #ffffff80;
  display: grid;
  place-content: center;
}
.puzzleCell:nth-child(3n) {
  border-right: 1px solid var(--font-teal);
}
.puzzleCell:hover {
  cursor: pointer;
  border: 1px solid #ffffff;
}
.puzzleCell h1 {
  font-size: 24px;
  color: var(--font-teal);
}
</style>

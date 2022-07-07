<script>
export default {
  name: "PuzzleCell",
  props: {
    value: Number,
    setValue: Function,
    activeValue: Number,
    toggleActive: Function,
  },
};
</script>

<template>
  <div class="puzzleCell">
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
  border: 1px solid #ffffff;
}
.puzzleCell h1 {
  font-size: 24px;
  color: var(--font-teal);
}
</style>

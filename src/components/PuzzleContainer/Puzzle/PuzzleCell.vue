<script>
export default {
  name: "PuzzleCell",
  props: {
    value: Number,
  },
};
</script>

<template>
  <div class="puzzleCell">
    <h1>{{ value }}</h1>
  </div>
</template>

<style scoped>
.puzzleCell {
  height: 100%;
  width: calc(100% / 9);
  border: 0.5px solid #ffffff80;
  display: grid;
  place-content: center;
  border: 1px solid transparent;
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

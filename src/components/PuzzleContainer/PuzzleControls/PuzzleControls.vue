<script>
import NumberSelector from "./NumberSelector.vue";

export default {
  name: "PuzzleControls",
  components: {
    NumberSelector,
  },
};
</script>

<template>
  <div class="puzzleControls">
    <div class="undo"></div>
    <NumberSelector />
  </div>
</template>

<style scoped>
.puzzleControls {
  width: 100%;
  height: 88px;
  border-top: 0.5px solid #ffffff80;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.puzzleControls .undo {
  width: 48px;
  aspect-ratio: 1/1;
  border: 1px solid white;
}
</style>

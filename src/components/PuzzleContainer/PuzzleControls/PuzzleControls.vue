<script>
import NumberSelector from "./NumberSelector.vue";

export default {
  name: "PuzzleControls",
  components: {
    NumberSelector,
  },
  props: {
    activeValue: Number,
    toggleActive: Function,
  },
};
</script>

<template>
  <div class="puzzleControls">
    <div class="undo">
      <img
        class="icon"
        src="../../../assets/undo-arrow.png"
        width="20"
        alt="undo"
      />
    </div>
    <NumberSelector :activeValue="activeValue" :toggleActive="toggleActive" />
  </div>
</template>

<style scoped>
.puzzleControls {
  background: var(--bg-teal-mute);
  width: 100%;
  height: 88px;
  border-top: 0.5px solid #ffffff80;
  display: flex;
  font-weight: 200;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.puzzleControls .undo {
  width: 32px;
  aspect-ratio: 1/1;
  display: grid;
  place-content: center;
}

.undo .icon {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(106deg)
    brightness(105%) contrast(106%);
}

.undo .icon:hover {
  filter: invert(80%) sepia(58%) saturate(195%) hue-rotate(109deg)
    brightness(103%) contrast(102%);
  cursor: pointer;
}
</style>

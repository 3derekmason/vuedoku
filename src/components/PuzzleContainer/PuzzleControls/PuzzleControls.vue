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
    originalBoard: Array,
    completeBoard: Array,
    editBoard: Function,
    resetBoard: Function,
  },
};
</script>

<template>
  <div class="puzzleControls">
    <div class="reset">
      <p>Reset</p>
      <img
        class="icon"
        src="../../../assets/undo-arrow.png"
        width="20"
        alt="reset"
        @click="
          () => {
            this.resetBoard();
          }
        "
      />
    </div>
    <NumberSelector
      :activeValue="activeValue"
      :toggleActive="toggleActive"
      :originalBoard="originalBoard"
      :completeBoard="completeBoard"
    />
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
.puzzleControls .reset {
  width: 32px;
  height: 48px;
  aspect-ratio: 1/1;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reset .icon {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(106deg)
    brightness(105%) contrast(106%);
}

.reset .icon:hover {
  filter: invert(80%) sepia(58%) saturate(195%) hue-rotate(109deg)
    brightness(103%) contrast(102%);
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .puzzleControls {
    gap: 8px;
  }
}
</style>

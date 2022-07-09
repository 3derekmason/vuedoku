<script>
export default {
  name: "PuzzleControls",
  props: {
    activeValue: Number,
    toggleActive: Function,
  },
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      isSelected: false,
    };
  },
};
</script>

<template>
  <div class="numberSelector">
    <img src="../../../assets/eraser.png" height="40" alt="eraser icon" />
    <div
      class="selection"
      v-for="number in numbers"
      :key="number"
      @click="
        () => {
          isSelected = number;
          toggleActive(number);
        }
      "
    >
      <p v-if="isSelected === number" class="selected">
        {{ numbers[number - 1] }}
      </p>
      <p v-else>{{ numbers[number - 1] }}</p>
    </div>
  </div>
</template>

<style scoped>
.numberSelector {
  width: 80%;
  height: 48px;
  border: 0.5px solid #ffffff80;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.numberSelector .selection {
  width: calc(80% / 9);
  display: grid;
  place-content: center;
  font-size: 1.5em;
}
.numberSelector .selection:hover {
  font-size: 2em;
  cursor: pointer;
}
.numberSelector img {
  filter: invert(100%) sepia(0%) saturate(3434%) hue-rotate(339deg)
    brightness(120%) contrast(74%);
}
.selection .selected {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
}
</style>

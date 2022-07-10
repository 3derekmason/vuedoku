<script>
import countNInBoard from "../../util/countNInBoard";

export default {
  name: "NumberSelector",
  props: {
    activeValue: Number,
    toggleActive: Function,
    completeBoard: Array,
    editBoard: Function,
  },
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  methods: {
    disableSelection(n) {
      return countNInBoard(n, this.completeBoard) >= 9;
    },
  },
};
</script>

<template>
  <div class="numberSelector">
    <img
      v-if="this.activeValue === 0"
      class="erasing"
      src="../../../assets/eraser.png"
      width="20"
      alt="erase"
      @click="
        () => {
          toggleActive(0);
        }
      "
    />
    <img
      v-else
      src="../../../assets/eraser.png"
      width="20"
      alt="erase"
      @click="
        () => {
          toggleActive(0);
        }
      "
    />
    <div
      class="selection"
      v-for="number in numbers"
      :key="number"
      @click="
        () => {
          toggleActive(number);
        }
      "
    >
      <button
        v-if="activeValue === number"
        class="selected"
        :disabled="this.disableSelection(number)"
      >
        {{ numbers[number - 1] }}
      </button>
      <button v-else :disabled="this.disableSelection(number)">
        {{ numbers[number - 1] }}
      </button>
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
.numberSelector .erasing {
  filter: invert(62%) sepia(31%) saturate(888%) hue-rotate(295deg)
    brightness(99%) contrast(104%);
}
.selection .selected {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
}
</style>

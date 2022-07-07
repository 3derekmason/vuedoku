<script>
import countNInBoard from "../../util/countNInBoard";
export default {
  name: "PuzzleControls",
  props: {
    activeValue: Number,
    toggleActive: Function,
    originalBoard: Array,
    completeBoard: Array,
  },
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  methods: {
    countNInBoard: countNInBoard,
    disableSelection(n) {
      return countNInBoard(n, this.completeBoard) >= 9;
    },
    erasing() {
      return this.activeValue === 0 ? "erasing" : "";
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
    <div class="selection" v-for="number in numbers" :key="number">
      <button
        v-if="activeValue === number"
        class="selected"
        :disabled="this.disableSelection(number)"
      >
        {{ numbers[number - 1] }}
      </button>
      <button
        v-else
        :disabled="this.disableSelection(number)"
        @click="
          () => {
            toggleActive(number);
          }
        "
      >
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
  gap: 8px;
}
.numberSelector img {
  filter: invert(87%) sepia(27%) saturate(151%) hue-rotate(306deg)
    brightness(103%) contrast(101%);
}
.numberSelector img:hover {
  cursor: pointer;
}
.numberSelector button {
  background: none;
  width: 100%;
  height: 100%;
  border: none;
  color: var(--font-teal);
  font-size: 24px;
}
.numberSelector .selection {
  font-weight: 200;
  width: calc(80% / 9);
  display: grid;
  place-content: center;
  font-size: 20px;
}
.numberSelector button:hover {
  font-size: 32px;
  color: var(--color-selected);
  cursor: pointer;
}
.numberSelector button:disabled {
  opacity: 0.6;
}
.numberSelector button:disabled:hover {
  font-size: 24px;
  color: var(--font-teal);
  cursor: default;
}

.numberSelector .erasing {
  filter: invert(62%) sepia(31%) saturate(888%) hue-rotate(295deg)
    brightness(99%) contrast(104%);
}

.selection .selected {
  font-size: 32px;
  font-weight: 500;
  color: var(--color-selected);
}
</style>

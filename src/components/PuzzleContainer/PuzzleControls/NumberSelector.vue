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
  },
};
</script>

<template>
  <div class="numberSelector">
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
.numberSelector .selection {
  font-weight: 200;
  width: calc(80% / 9);
  display: grid;
  place-content: center;
  font-size: 20px;
}
.numberSelector .selection:hover {
  font-size: 24px;
  cursor: pointer;
}
.numberSelector button:disabled {
  color: red;
  background: green;
}

.selection .selected {
  font-size: 32px;
  font-weight: 600;
  color: var(--color-selected);
}
</style>

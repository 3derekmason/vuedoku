<script>
export default {
  name: "PuzzleControls",
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
};
</script>

<template>
  <div class="numberSelector">
    <div class="selection" v-for="number in numbers" :key="number">
      <p>{{ numbers[number - 1] }}</p>
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
</style>

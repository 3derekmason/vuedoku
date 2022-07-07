<script>
import PuzzleBoard from "./Puzzle/PuzzleBoard.vue";
import PuzzleControls from "./PuzzleControls/PuzzleControls.vue";
export default {
  name: "PuzzleContainer",
  components: {
    PuzzleBoard,
    PuzzleControls,
  },
  data: () => ({
    activeValue: 0,
  }),
  methods: {
    toggleActive(input) {
      this.activeValue = input;
    },
  },
};
</script>

<template>
  <div class="container">
    <PuzzleBoard
      :activeValue="this.activeValue"
      :toggleActive="this.toggleActive"
    />
    <PuzzleControls
      :activeValue="this.activeValue"
      :toggleActive="this.toggleActive"
    />
  </div>
</template>

<style scoped>
.container {
  background: var(--bg-teal-mute);
  width: 800px;
  height: calc(100vh - 88px);
  border-left: 0.5px solid #ffffff80;
  border-right: 0.5px solid #ffffff80;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>

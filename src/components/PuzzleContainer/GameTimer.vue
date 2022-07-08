<template>
  <div class="timer">{{ this.currentTime }}</div>
</template>

<script>
export default {
  name: "GameTimer",
  props: {
    currentTime: Number,
  },
};
</script>

<style scoped></style>

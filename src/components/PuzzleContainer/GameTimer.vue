<template>
  <div class="timer">
    {{ this.formatTime(this.currentTime)[0] }}:{{
      this.formatTime(this.currentTime)[1]
    }}
  </div>
</template>

<script>
export default {
  name: "GameTimer",
  props: {
    currentTime: Number,
  },
  methods: {
    formatTime(seconds) {
      let timeTuple = [0, seconds];
      if (timeTuple[1] >= 60) {
        timeTuple[0]++;
        timeTuple[1] = timeTuple[1] - 60;
      }
      if (timeTuple[1] < 10) {
        timeTuple[1] = "0" + timeTuple[1];
      }
      return timeTuple;
    },
  },
};
</script>

<style scoped></style>

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
      let timeTuple = [Math.floor(seconds / 60), Math.floor(seconds % 60)];
      if (timeTuple[1] < 10) {
        timeTuple[1] = "0" + timeTuple[1];
      }
      return timeTuple;
    },
  },
};
</script>

<style scoped>
.timer {
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 4px;
}

@media only screen and (max-width: 600px) {
  .timer {
    height: 40px;
  }
}
</style>

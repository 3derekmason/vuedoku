<template>
  <div class="timer"></div>
</template>

<script>
export default {
  name: "GameTimer",
  props: {
    startingTime: Date,
    currentTime: Date,
  },
};
</script>

<script>
export default {
  name: "AppBar",
};
</script>

<template>
  <div class="appbar">
    <h1>Vuedoku</h1>
    <div class="buttonRow">
      <p>Read about the app:</p>
      <a
        href="https://medium.com/@derekmason/hi-there-thank-you-for-reading-1686b0f33b82"
        target="_blank"
        >Logic</a
      >
      <a
        href="https://medium.com/@derekmason/build-a-sudoku-app-with-vue-part-ii-game-ui-fe9163814189"
        target="_blank"
        >UI</a
      >
      <a href="https://derekmason.dev" target="_blank">UI + UX</a>
    </div>
  </div>
</template>

<style scoped>
.appbar {
  width: 100%;
  height: 88px;
  background: var(--bg-teal);
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.appbar h1 {
  letter-spacing: 2px;
}

.appbar .buttonRow {
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.buttonRow a {
  padding: 4px;
  width: 112px;
  background: var(--bg-teal);
  color: var(--font-teal);
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  border-radius: 2px;
  border: 0.5px solid var(--color-selected-soft);
  box-shadow: 0 2px 0 var(--color-selected-soft);
  transition: 0.1s;
}
.buttonRow a:hover {
  background: var(--bg-teal-soft);
  transition: 0.1s;
}
.buttonRow a:active {
  box-shadow: none;
  transform: translateY(2px);
}
</style>

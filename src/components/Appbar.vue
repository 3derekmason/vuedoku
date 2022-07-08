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
      <a href="">UI + UX</a>
    </div>
  </div>
</template>

<style scoped>
.appbar {
  background: var(--bg-teal);
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 88px;
}
.appbar h1 {
  letter-spacing: 2px;
}

.appbar .buttonRow {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  gap: 16px;
}

.buttonRow a {
  background: var(--bg-teal);
  color: var(--font-teal);
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  padding: 4px;
  width: 112px;
  text-align: center;
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

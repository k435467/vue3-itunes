<template>
  <div id="app">
    <div class="nav-bar">
      <div class="mx-4 title">Search Albums</div>
      <div>
        <a
          href="https://github.com/k435467/vue3-itunes"
          target="_blank"
          class="mx-4 black-text"
          >GITHUB</a
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: "Roboto", sans-serif;
}

.nav-bar {
  width: 100%;
  height: 50px;
  background-color: #262626;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.title {
  font-size: 20px;
  font-weight: 500;
}

.mx-4 {
  margin: 0px 16px !important;
}

.white-text {
  color: white !important;
}

a,
a:hover,
a:visited,
a:active {
  color: inherit;
  text-decoration: none;
}
</style>

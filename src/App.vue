<template>
  <div id="app">
    <div class="nav" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "SignUp",
  components: {},
  data() {
    return {
      me: {},
      accounts: {},
    };
  },
};
</script>

<style>
#app {
  position: relative;
  overflow: hidden;
  max-width: 400px;
  min-height: 400px;
  margin: 10vh auto 0px;
  border: 1px solid rgba(109, 109, 109, 0.3);
  border-radius: 5px;
  box-shadow: 0px 0px 10px 5px rgba(78, 78, 78, 0.3);
}

.nav {
  margin-bottom: 20px;
}
</style>
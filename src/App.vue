<template>
  <div id="app">
    <div class="nav">
      <!-- <router-link to="/">Dashboard</router-link> | 
      <router-link to="/members">Members</router-link> | 
      <router-link to="/signUp">Sign Up</router-link> | 
      <router-link to="/signIn">Sign In</router-link> | 
      <router-link to="/errors">Errors</router-link> -->
    </div>
    <router-view />
  </div>
</template>

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
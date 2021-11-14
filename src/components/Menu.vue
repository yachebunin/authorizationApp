<template>
  <div>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-navigation-drawer right v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title><v-icon small>mdi-account</v-icon> {{ login }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logOut">
            <v-list-item-title><v-icon small>mdi-home</v-icon> logOut</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { logOut } from "../services/auth/index";

export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  computed: {
    login() {
      return this.$parent.$parent.me.login;
    },
  },
  methods: {
    logOut() {
      this.$router.push("/signUp");
      logOut(true);
    },
  },
};
</script>
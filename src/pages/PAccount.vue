<template>
  <div class="dashboard-wrapper">
    <Menu />
    <div class="dashboard">
      Total Accounts Count: <span class="count">{{ totalCount }}</span>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
  name: "Account",
  computed: {
    totalCount() {
      return this.$parent.accounts.totalCount;
    },
  },
  components: {
    Menu,
  },
};
</script>

<style scoped>
.dashboard {
  position: absolute;
  left: 50%;
  top: 50%;
  min-width: 300px;
  transform: translateX(-50%) translateY(-50%);
  font-size: 26px;
}

.count {
  font-weight: bold;
}
</style>
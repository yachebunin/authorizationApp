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
import gql from "graphql-tag";

export default {
  name: "Account",
  computed: {
    totalCount() {
     return this.accounts ? this.accounts.totalCount : 0
    },
  },
  components: {
    Menu,
  },
  apollo: {
    accounts: gql`
      {
        accounts {
          totalCount
          list {
            id
            login
            createdAt
            updatedAt
          }
        }
      }
    `,
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
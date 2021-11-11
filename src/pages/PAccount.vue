<template>
  <div class="dashboard">
    Total Accounts Count: <span class="count">123</span>
  </div>
</template>

<script>
export default {
  name: "Account",
  components: {},
  methods: {},
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
  z-index: 100;
}

.count {
    font-weight: bold;
}
</style>
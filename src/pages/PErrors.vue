<template>
  <div class="info">
    <h4 class="error">ERROR 404 :(</h4>
    <p class="description">not found</p>
  </div>
</template>

<script>
export default {
  name: "Errors",
  components: {},
  methods: {},
};
</script>

<style scoped>
.info {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 100;
  min-width: 220px;
  transform: translateX(-50%) translateY(-50%);
}

.error {
  font-size: 34px;
  font-weight: bold;
}

.description {
  font-size: 20px;
  color: rgb(66, 66, 66);
}
</style>
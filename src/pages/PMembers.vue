<template>
  <div class="members">
    <Menu />
    <div class="header">
      <span class="title">Users</span>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </div>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      :search="search"
    >
    </v-data-table>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
  name: "SignIn",
  components: { Menu },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Email",
          align: "start",
          sortable: true,
          value: "email",
        },
        {
          text: "Created At",
          align: "start",
          value: "created",
          sortable: true,
        },
      ],
      desserts: [
        {
          created: "12.07.2021",
          email: "example@mail.ru",
        },
        {
          created: "31.12.2020",
          email: "test@mail.ru",
        },
      ],
    };
  },
};
</script>

<style scoped>
.members {
  position: relative;
}

.header {
  display: flex;
  margin-bottom: 15px;
  padding: 0px 20px;
}

.title {
  font-size: 20px;
  font-weight: bold;
}
</style>
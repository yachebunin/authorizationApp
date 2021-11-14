<template>
  <div>
    <Menu />

    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      hide-details
      style="padding: 10px"
    ></v-text-field>

    <v-data-table
      :headers="headers"
      :items="members"
      :items-per-page="5"
      :search="search"
      style="text-align: left"
    >
    </v-data-table>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import { format } from "date-fns";

export default {
  name: "SignIn",
  components: { Menu },
  computed: {
    members() {
      return (
        this.$parent.accounts.list &&
        this.$parent.accounts.list.map((account) => {
          return {
            login: account.login,
            createdAt: format(new Date(account.createdAt), "MM.dd.yyyy"),
          };
        })
      );
    },
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Email",
          sortable: true,
          value: "login",
        },
        {
          text: "Created At",
          value: "createdAt",
          sortable: true,
        },
      ],
    };
  },
};
</script>
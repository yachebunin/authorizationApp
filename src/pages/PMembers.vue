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
import gql from "graphql-tag";

export default {
  name: "SignIn",
  components: { Menu },
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
  computed: {
    members() {
      return (
        this.accounts &&
        this.accounts.list &&
        this.accounts.list.map((account) => {
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
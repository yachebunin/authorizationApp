<template>
  <div>
    <div class="title"><span class="name">Simple Project</span> | Sign Up</div>
    <v-form id="form" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :append-icon="'mdi-email'"
        :rules="[rules.required, rules.emailMatch]"
        name="input-email"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="showPassword ? 'text' : 'password'"
        name="input-password"
        label="Password"
        @click:append="showPassword = !showPassword"
      ></v-text-field>

      <v-btn :disabled="!valid" class="mr-4 button" @click="validate">
        Sign Up
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import registerMutation from "@/services/gql/mutations/register.gql"

export default {
  name: "SignUp",
  components: {},
  data: () => ({
    showPassword: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
    valid: true,
    password: "",
    email: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must be more than 10 characters",
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate() && this.confirm(this.email, this.password);
    },
    reset() {
      this.$refs.form.reset();
    },
    confirm(login, password) {
      this.$apollo.mutate({
        mutation: registerMutation,
        variables: {
          login,
          password
        }
      })
    }
  },
};
</script>

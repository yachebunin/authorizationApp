<template>
  <div>
    <div class="title"><span class="name">Simple Project</span> | Sign In</div>
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
      Sign in
    </v-btn>

    <router-link class="link" to="/signUp">Sign Up</router-link>
  </v-form>
  </div>
</template>

<script>
import authenticateMutation from "@/services/gql/mutations/login.gql";
import { login } from "@/services/auth/index";

export default {
  name: "SignIn",
  components: {},
  data: () => ({
    showPassword: false,
    fLogin: login,
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
      (v) =>
        (v && v.length >= 8) || "Password must be more than 10 characters",
    ],
  }),
  methods: {
    validate() {
       this.$refs.form.validate() && this.confirm(this.email, this.password);
    },
    reset() {
      this.$refs.form.reset();
    },
    async confirm(login, password) {
      const response = await this.$apollo.mutate({
        mutation: authenticateMutation,
        variables: {
          login,
          password,
        },
      });

      const authenticate = response.data.authenticate;
      authenticate.accessToken && this.$router.push("/");
      this.fLogin(authenticate);
    },
  },
};
</script>

<style scoped>
#form {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

#form > button {
  align-self: flex-end;
  max-width: 100px;
  margin-right: 20px;
  background: rgb(11, 154, 236);
  color: #fff;
}

.title {
  margin-bottom: 30px;
  padding: 20px 0px 20px 20px;
  font-size: 20px;
  border-bottom: 1px solid #000;
}

.name {
  font-weight: bold;
}

.link {
  color: #000;
  text-decoration: none;
}
</style>
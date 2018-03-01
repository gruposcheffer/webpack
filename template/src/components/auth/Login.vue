<template>
  <v-content id="login">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 lg3>
          <v-card class="elevation-12">
            <v-form @submit="login">
              <v-toolbar dark color="primary">
                <img src="/static/logo.png" alt="Logo GS">
                <v-spacer/>
                <v-toolbar-title >
                  AppNome
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <gs-alert ref="alert" :message="alerta.message" :error="alerta.error"/>
                <div class="form">
                  <v-text-field prepend-icon="person" name="username" label="Login" type="text" v-model="form.username" :autofocus="true"/>
                  <v-text-field prepend-icon="lock" name="password" label="Senha" id="password" v-model="form.password" type="password"/>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn outline color="primary" type="submit" :loading="running">
                  <v-icon>done</v-icon>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      running: false,
      form: {
        username: null,
        passowrd: null
      },
      alerta: {
        message: null,
        error: false
      }
    }
  },
  methods: {
    login (e) {
      e.preventDefault()
      this.running = true
      this.$store.dispatch('login', this.form).then(
        success => {
          this.$router.go('/')
        },
        error => {
          this.alerta.message = error['non_field_errors'][0]
          this.alerta.error = true
          this.$refs.alert.show()
          this.running = false
        }
      )
    }
  },
  created () {
    this.$store.dispatch('check').then(
      resolve => {},
      reject => {
        this.alerta.message = reject.message
        this.alerta.error = true
        this.$refs.alert.show()
      }
    )
  }
}
</script>

<style lang="scss">
#login {
  .form {
    padding: 30px 20px;
  }
}
</style>

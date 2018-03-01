<template>
  <v-alert :type="alertType" transition="slide-y-transition" v-model="alert">
    {{ mensagem }}
  </v-alert>
</template>

<script>
export default {
  name: 'alert',
  props: {
    error: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      alert: false
    }
  },
  computed: {
    alertType () {
      return this.error ? 'error' : 'info'
    },
    mensagem () {
      return this.message
    }
  },
  methods: {
    show () {
      this.alert = true
    }
  }
}
</script>

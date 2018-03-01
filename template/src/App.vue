<template>
  <v-app id="app">
    <toolbar v-if="logged"/>

    {{#router}}
    <router-view/>
    {{else}}
    <Home/>
    {{/router}}
  </v-app>
</template>

<script>
{{#unless router}}
import Home from './components/Home'
{{/unless}}
import toolbar from '@/components/template/TheToolbar'

export default {
  name: 'App',
  components: {
    'toolbar': toolbar{{#router}}{{else}},
    Home
    {{/router}}
  },
  computed: {
    logged () {
      return this.$store.state.logged
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}
</style>

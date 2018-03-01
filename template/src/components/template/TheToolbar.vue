<template>
  <div id="toolbar">
    <v-toolbar
      color="green darken-3"
      dark
      app
      :clipped-left="true"
      fixed
    >
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">
          <img src="/static/logo.png" alt="Logo GS">
        </span>
      </v-toolbar-title>
      <v-btn icon to="/">
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon to="/login">
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-spacer/>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Pesquisar"
        class="hidden-sm-and-down"
      />
      <v-btn icon>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'TheToolbar',
  data: () => ({
    drawer: null
  })
}
</script>

<style scoped>
#toolbar {
  margin-bottom: 80px;
}
</style>

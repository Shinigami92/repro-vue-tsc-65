<template lang="pug">
v-menu(offset-y)
  template(v-slot:activator="{ on: menu, attrs }")
    v-tooltip(bottom)
      template(v-slot:activator="{ on: tooltip }")
        v-btn(
          v-on="{ ...tooltip, ...menu }",
          v-bind="attrs",
          :x-large="!mini",
        )
          v-btn(:small="!mini")
            span ...
          template(v-if="!mini")
            div(v-text="variable || $t('lang-key')")
            v-icon mdi-chevron-down
      span(v-text="variable || $t('lang-key')")
  v-list
    v-list-item(
      v-for="portal in portals",
      :key="portal.id",
      :input-value="selectedPortalId === portal.id",
      @click="selectedPortalId = portal.id"
    )
      v-list-item-title {{ portal.name }}
  hello-world(msg="Hi")
</template>

<script lang="ts" src="./App.ts"></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

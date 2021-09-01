<template lang="pug">
div
  h1 {{ msg }}

  p.
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>

  p.
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>

  button(@click="count++") count is: {{ count }}, double is: {{ double }}
  p.
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
</template>

<!-- <preview msg="Hello Volar!"></preview> -->

<script lang="ts" src="./HelloWorld"></script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

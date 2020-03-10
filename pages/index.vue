<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">nuxt-typescript</h1>
      <h2 class="subtitle">Nuxt TypeScript Boilerplate</h2>
      <div class="links buttons are-large">
        <nuxt-link to="example1" class="button--grey button"
          >Example 1 Page</nuxt-link
        >
        <nuxt-link to="example2" class="button--grey button"
          >Example 2 Page</nuxt-link
        >
      </div>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/b-ldx/nuxt-typescript-boilerplate"
          target="_blank"
          class="button--green"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: { Logo }
})
export default class extends Vue {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.subtitle,
h3 {
  padding-bottom: 15px;
  margin-bottom: 1.5rem;
}

.links {
  padding-top: 15px;
  justify-content: center;
}
</style>

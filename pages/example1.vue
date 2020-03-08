<template>
  <div class="container">
    <div>
      <h2 class="subtitle">{{ rootVar }}</h2>
      <h3>{{ rootVarGetter }}</h3>
      <h2 class="subtitle">{{ testVar }}</h2>
      <h3>{{ testGetter }}</h3>
      <div class="links">
        <nuxt-link to="/" class="button--green">Retour</nuxt-link>
        <button
          class="button--grey"
          @click="UpdateRootVar('1- Root variable CHANGED')"
        >
          Update Root variable
        </button>
        <button
          class="button--grey"
          @click="
            UpdateTestVarOnStoreModule('Some updated value from 1st example')
          "
        >
          Update Test variable
        </button>
        <button class="button--grey" @click="CoolUpdate">
          Make a cool update
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/**
 * This example page shows the use of Vuex module instance according to Nuxt Typescript documentation
 * Docs :
 * https://typescript.nuxtjs.org/cookbook/store.html#class-based
 * https://github.com/championswimmer/vuex-module-decorators#accessing-modules-with-nuxtjs

 * WARNING:
 * The use of an inner variable to bind exampleStore (i.e moduleStore = exampleStore)
 * is not recommanded since template doesn't benefit from type safety
 * Which may lead to errors in case of modification on module definition
 * The use of "nameof" helper function is strongly recommanded 
 * in case of the use of this.$store.dispatch to add a level of type safety
 **/

import { Vue, Component } from 'nuxt-property-decorator'
import { exampleStore, RootState, RootGetters, RootActions } from '~/store'
import { nameof } from '~/utils/helpers'

@Component
export default class extends Vue {
  get rootVar() {
    return (this.$store.state as RootState).rootVar
  }

  get rootVarGetter() {
    return (this.$store.getters as RootGetters).rootVarGetter
  }

  UpdateRootVar(value: string) {
    this.$store.dispatch(nameof<RootActions>('Update'), value)
  }

  get testVar() {
    return exampleStore.testVar
  }

  get testGetter() {
    return exampleStore.testGetter
  }

  UpdateTestVarOnStoreModule(value: string) {
    exampleStore.Update(value)
  }

  CoolUpdate() {
    exampleStore.CoolUpdate()
  }
}
</script>
<style scoped></style>

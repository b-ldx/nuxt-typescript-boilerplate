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
          @click="UpdateRootVar('2- Root variable CHANGED')"
        >
          Update Root variable
        </button>
        <button
          class="button--grey"
          @click="
            UpdateTestVarOnStoreModule('Some updated value from 2nd example')
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
 * This example shows the use of vuex-class bindings using decorators
 * Doc :
 * https://github.com/nuxt-community/nuxt-property-decorator#decorators-and-helpers
 * Paragraph #exported from vuex-class

 * The use of a "store model" is a way to benefit of type safety
 * The benefit of this approach also includes that any modification made on module definition (= model) 
 * will result in an error on type binding which indicates that the binding expression is false 
 * WARNING :
 * Still the compilation will not fail in case of initially mistyping the binding expression
 * or not modifying it in the case mentioned above (= model modification)
 **/

import {
  Vue,
  Component,
  State,
  namespace,
  Getter,
  Action
} from 'nuxt-property-decorator'
import { RootState, ExampleStoreModel, RootGetters, RootActions } from '~/store'

const exampleStore = namespace('example')

@Component
export default class extends Vue {
  @State rootVar!: RootState['rootVar']

  @Getter rootVarGetter!: RootGetters['rootVarGetter']

  @Action('Update') UpdateRootVar!: RootActions['Update']

  @exampleStore.State testVar!: ExampleStoreModel['testVar']

  @exampleStore.Getter testGetter!: ExampleStoreModel['testGetter']

  @exampleStore.Action('Update')
  UpdateTestVarOnStoreModule!: ExampleStoreModel['Update']

  @exampleStore.Action CoolUpdate!: ExampleStoreModel['CoolUpdate']
}
</script>
<style scoped></style>

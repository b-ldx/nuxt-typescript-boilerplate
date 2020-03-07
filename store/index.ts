import { MutationTree, ActionContext } from 'vuex'
import initializeStores from '~/utils/store-accessor'

/**
 * Root store can be handled in the "Vanilla" way
 * Doc: https://typescript.nuxtjs.org/cookbook/store.html#vanilla
 * WARNING:
 * Types GetterTree, ActionTree on getters and actions variables are voluntary omitted
 * to avoid not working autocompletion when casting
 * Examples:
 * (see pages/example1.vue) : (this.$store.getters as RootGetters).rootVarGetter
 * (see pages/example2.vue) : @Action('update') UpdateRootVar!: RootActions['update']
 **/

/* State */
export const state = () => ({
  rootVar: 'Root variable'
})
export type RootState = ReturnType<typeof state>

/* Getters */
const gettersFactory = () => ({
  rootVarGetter: (state: RootState) => `Inside a getter : ${state.rootVar}`
})
export const getters = gettersFactory()
export type RootGetters = ReturnType<typeof gettersFactory>

/* Mutations */
export const mutations: MutationTree<RootState> = {
  CHANGE_ROOT_VAR: (state: RootState, value: string) => (state.rootVar = value)
}

/* Actions */
const actionsFactory = () => ({
  update({ commit }: ActionContext<RootState, RootState>, value: string) {
    commit('CHANGE_ROOT_VAR', value)
  }
})
export const actions = actionsFactory()
export type RootActions = ReturnType<typeof actionsFactory>

export const plugins = [initializeStores]
export * from '~/utils/store-accessor'
export * from '~/utils/store-models-factory'

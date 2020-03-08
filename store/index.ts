import { ActionContext } from 'vuex'
import initializeStores from '~/utils/store-accessor'
import { nameof } from '~/utils/helpers'

/**
 * Root store can be handled in the "Vanilla" way
 * Doc: https://typescript.nuxtjs.org/cookbook/store.html#vanilla
 * WARNING:
 * Interfaces GetterTree, MutationTree, ActionTree for vuex are voluntary not implemented on classes
 * due to interfaces index signatures which don't prevent compilation errors when binding or casting types
 * Example:
 * Add "implements GetterTree<RootState, RootState>" to Getters class
 * in pages/example1.vue, this will not raise any error : (this.$store.getters as RootGetters).anything
 * in pages/example2.vue, this will not raise any error : @Getter rootVarGetter!: RootGetters['anything']
 **/

/* State */
export const state = () => ({
  rootVar: 'Root variable'
})
export type RootState = ReturnType<typeof state>

/* Getters */
class Getters {
  rootVarGetter = (state: RootState) => `Inside a getter : ${state.rootVar}`
}
export const getters = new Getters()
export type RootGetters = InstanceType<typeof Getters>

/* Mutations */
class Mutations {
  changeRootVar = (state: RootState, value: string) => (state.rootVar = value)
}
export const mutations = new Mutations()
export type RootMutations = InstanceType<typeof Mutations>

/* Actions */
const nameOfMutation = (key: keyof Mutations) => nameof<Mutations>(key)
class Actions {
  Update = ({ commit }: ActionContext<RootState, RootState>, value: string) => {
    commit(nameOfMutation('changeRootVar'), value)
  }
}
export const actions = new Actions()
export type RootActions = InstanceType<typeof Actions>

export const plugins = [initializeStores]
export * from '~/utils/store-accessor'

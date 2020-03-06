import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import ExampleModule from '~/store/example'

export let exampleStore: ExampleModule
const exampleStoreFactory = () => exampleStore
export type ExampleStoreModel = ReturnType<typeof exampleStoreFactory>

const initializeStores = (store: Store<any>) => {
  exampleStore = getModule(ExampleModule, store)
}

export default initializeStores

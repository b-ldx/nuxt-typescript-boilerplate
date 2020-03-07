import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import ExampleModule from '~/store/example'

let exampleStore: ExampleModule

const initializeStores = (store: Store<any>) => {
  exampleStore = getModule(ExampleModule, store)
}

export default initializeStores
export { exampleStore }

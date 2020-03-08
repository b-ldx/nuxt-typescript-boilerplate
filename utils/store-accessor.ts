import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import ExampleModule from '~/store/example'

export let exampleStore: ExampleModule
export type ExampleStoreModel = InstanceType<typeof ExampleModule>

export default (store: Store<any>) => {
  exampleStore = getModule(ExampleModule, store)
}

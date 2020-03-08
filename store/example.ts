import {
  VuexModule,
  Module,
  Action,
  Mutation,
  MutationAction
} from 'vuex-module-decorators'
import { nameof } from '~/utils/helpers'

const nameOf = (key: keyof ExampleModule) => nameof<ExampleModule>(key)

// Doc: https://typescript.nuxtjs.org/cookbook/store.html#class-based
@Module({ name: 'example', stateFactory: true, namespaced: true })
export default class ExampleModule extends VuexModule {
  testVar = 'Test variable'
  count = 0

  get testGetter() {
    return `Inside a Getter : ${this.testVar}`
  }

  @Action
  Update(value: string) {
    this.context.commit(nameOf('increaseCount'))
    this.UpdateVar(value)
  }

  @Action({ commit: nameOf('updateTestVar') })
  UpdateVar(value: string): string {
    return `${value}. Count : ${this.count}`
  }

  @Mutation
  updateTestVar(value: string) {
    this.testVar = value
  }

  @Mutation
  increaseCount() {
    this.count++
  }

  // Doc: https://github.com/championswimmer/vuex-module-decorators#async-mutationaction--magic
  @MutationAction({ mutate: ['testVar', 'count'] })
  async CoolUpdate() {
    return { testVar: 'A cool update', count: 0 }
  }
}

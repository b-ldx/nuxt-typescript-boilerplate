import ExampleModule from '~/store/example'

function factory<T>(type: { new (x: Object): T }): () => T {
  return () => new type({})
}

const exampleStoreModel = factory(ExampleModule)
export type ExampleStoreModel = ReturnType<typeof exampleStoreModel>

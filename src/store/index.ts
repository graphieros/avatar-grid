import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export const key: InjectionKey<Store<State>> = Symbol();

export interface State {
  [key: string]: string | number | any;
}

export const store = createStore<State>({
  state: {},
  mutations: {},
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}

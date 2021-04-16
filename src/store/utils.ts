import { ActionContext, CommitOptions, DispatchOptions, Store as VuexStore } from "vuex";
import { State } from "../models/state";
import { PostActions } from "./actions/post.actions";
import { TodoActions } from "./actions/todo.actions";
import { PostGetters } from "./getters/post.getters";
import { TodoGetters } from "./getters/todo.getters";
import { PostMutations } from "./mutations/post.mutations";
import { TodoMutations } from "./mutations/todo.mutations";

export type Mutations =
  & TodoMutations
  & PostMutations;

export type Actions =
  & TodoActions
  & PostActions;

export type Getters =
  & TodoGetters
  & PostGetters;

export type ActionArguments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}
import { State, Todo } from "@app/models";
import { TodoMutationsType } from "../mutations/todo.mutations";
import { ActionTree } from "vuex";
import { ActionArguments } from "../utils";

export enum TodoActionsType {
  AddTodo = 'ADD_TODO',
  RemoveTodo = 'REMOVE_TODO',
  CompletedTodo = 'COMPLETED_TODO',
}

export interface TodoActions {
  [TodoActionsType.AddTodo](context: ActionArguments, todo: Todo): void;
  [TodoActionsType.RemoveTodo](context: ActionArguments, todo: Todo): void;
  [TodoActionsType.CompletedTodo](contet: ActionArguments, todo: Todo): void;
}

export const todoActions: ActionTree<State, State> & TodoActions = {
  async [TodoActionsType.AddTodo]({ commit }: { commit: any }, todo: Todo) {
    commit(TodoMutationsType.AddTodo, todo);
  },
  [TodoActionsType.RemoveTodo]({ commit }: { commit: any }, todo: Todo) {
    commit(TodoMutationsType.RemoveTodo, todo);
  },
  [TodoActionsType.CompletedTodo]({ commit }: { commit: any }, todo: Todo) {
    commit(TodoMutationsType.CompletedTodo, todo);
  }
}
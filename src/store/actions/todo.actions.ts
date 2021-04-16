import { State, Todo } from "@app/models";
import { TodoMutationsType } from "../mutations/todo.mutations";
import { inject } from "vue";
import { AxiosStatic } from "axios";
import { ActionTree } from "vuex";
import { ActionArguments } from "../utils";

export enum TodoActionsType {
  AddTodo = 'ADD_TODO',
  RemoveTodo = 'REMOVE_TODO',
  LoadInitialTodos = 'LOAD_INITIAL_TODOS'
}

export interface TodoActions {
  [TodoActionsType.AddTodo](context: ActionArguments, todo: Todo): void;
  [TodoActionsType.RemoveTodo](context: ActionArguments, todo: Todo): void;
  [TodoActionsType.LoadInitialTodos](context: ActionArguments): void;
}

export const todoActions: ActionTree<State, State> & TodoActions = {
  [TodoActionsType.AddTodo]({ commit }: { commit: any }, todo: Todo) {
    commit(TodoMutationsType.AddTodo, todo);
  },
  [TodoActionsType.RemoveTodo]({ commit }: { commit: any }, todo: Todo) {
    commit(TodoMutationsType.RemoveTodo, todo);
  },
  async [TodoActionsType.LoadInitialTodos]({ commit }: { commit: any }) {
    const axios = inject('axios') as AxiosStatic;
    const response = await axios.get('/api/todos');
    const todos = response.data;
    commit(TodoMutationsType.LoadInitial, todos);
  }
}
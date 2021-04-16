import { State, Todo } from "@app/models";
import { GetterTree } from "vuex";

export interface TodoGetters {
  totalTodos(state: State): number;
  todos(state: State): Todo[];
}

export const todoGetters: GetterTree<State, State> & TodoGetters = {
  totalTodos: (state: State) => {
    return state.todos.length;
  },
  todos: (state: State) => {
    return state.todos;
  }
}
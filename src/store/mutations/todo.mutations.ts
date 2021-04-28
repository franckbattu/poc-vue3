import { State, Todo } from "@app/models";
import { MutationTree } from "vuex";

export enum TodoMutationsType {
  AddTodo = 'ADD_TODO',
  RemoveTodo = 'REMOVE_TODO',
  LoadInitial = 'LOAD_INITIAL_TODOS',
  CompletedTodo = 'COMPLETED_TODO'
}

export interface TodoMutations {
  [TodoMutationsType.AddTodo](state: State, todo: Todo): void;
  [TodoMutationsType.RemoveTodo](state: State, todo: Todo): void;
  [TodoMutationsType.LoadInitial](state: State, todos: Todo[]): void;
  [TodoMutationsType.CompletedTodo](state: State, todo: Todo): void;
}

export const todoMutations: MutationTree<State> & TodoMutations = {
  [TodoMutationsType.AddTodo]: (state: State, todo: Partial<Todo>) => {
    todo.id = state.todos.length + 1;
    state.todos.unshift(todo);
  },
  [TodoMutationsType.RemoveTodo]: (state: State, todo: Todo) => {
    state.todos.filter(t => t.id !== todo.id);
  },
  [TodoMutationsType.LoadInitial]: (state: State, todos: Todo[]) => {
    state.todos = todos;
  },
  [TodoMutationsType.CompletedTodo]: (state: State, todo: Todo) => {
    state.todos.map(t => {
      if (t.id === todo.id) {
        t.completed = todo.completed;
      }
      return t;
    });
  }
} 
import { useAppStore } from "@app/store";
import { computed, ComputedRef } from "vue";
import { Post } from "../models/post";
import { Todo } from "../models/todo";
import { PostActionsType } from "../store/actions/post.actions";
import { TodoActionsType } from "../store/actions/todo.actions";

function populateInitialData() {
  const store = useAppStore();
  const todos: ComputedRef<Todo[]> = computed(() => store.getters.todos);
  const posts: ComputedRef<Post[]> = computed(() => store.getters.posts);

  if (todos.value.length === 0) {
    store.dispatch(TodoActionsType.LoadInitialTodos);
  }

  if (posts.value.length === 0) {
    store.dispatch(PostActionsType.LoadInitialPosts);
  }
}

export function useInitialStore() {
  return {
    populateInitialData
  }
}
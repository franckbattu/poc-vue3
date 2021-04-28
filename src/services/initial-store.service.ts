import { useAppStore } from "@app/store";
import { computed, ComputedRef } from "vue";
import { Post } from "../models/post";
import { PostActionsType } from "../store/actions/post.actions";

function populateInitialData() {
  const store = useAppStore();
  const posts: ComputedRef<Post[]> = computed(() => store.getters.posts);

  if (posts.value.length === 0) {
    store.dispatch(PostActionsType.LoadInitialPosts);
  }
}

export function useInitialStore() {
  return {
    populateInitialData
  }
}
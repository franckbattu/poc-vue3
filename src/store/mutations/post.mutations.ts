import { Post, State } from "@app/models";
import { MutationTree } from "vuex";

export enum PostMutationsType {
  AddPost = 'ADD_POST',
  RemovePost = 'REMOVE_POST',
  LoadInitial = 'LOAD_INITIAL_POSTS'
}

export interface PostMutations {
  [PostMutationsType.AddPost](state: State, post: Post): void;
  [PostMutationsType.RemovePost](state: State, post: Post): void;
  [PostMutationsType.LoadInitial](state: State, post: Post[]): void;
}

export const postMutations: MutationTree<State> & PostMutations = {
  [PostMutationsType.AddPost]: (state: State, post: Post) => {
    state.posts.unshift(post);
  },
  [PostMutationsType.RemovePost]: (state: State, post: Post) => {
    state.posts.filter(t => t.id !== post.id);
  },
  [PostMutationsType.LoadInitial]: (state: State, posts: Post[]) => {
    state.posts = posts;
  }
} 
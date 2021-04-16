import { Post, State } from "@app/models";
import { GetterTree } from "vuex";

export interface PostGetters {
  total(state: State): number;
  posts(state: State): Post[];
}

export const postGetters: GetterTree<State, State> & PostGetters = {
  total: (state: State) => {
    return state.posts.length;
  },
  posts: (state: State) => {
    return state.posts;
  }
}
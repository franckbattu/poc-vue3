import { Post, State } from "@app/models";
import { AxiosStatic } from "axios";
import { inject } from "vue";
import { ActionTree } from "vuex";
import { PostMutationsType } from "../mutations/post.mutations";
import { ActionArguments } from "../utils";

export enum PostActionsType {
  AddPost = 'ADD_POST',
  RemovePost = 'REMOVE_POST',
  LoadInitialPosts = 'LOAD_INITIAL_POSTS'
}

export interface PostActions {
  [PostActionsType.AddPost](context: ActionArguments, post: Post): void;
  [PostActionsType.RemovePost](context: ActionArguments,post: Post): void;
  [PostActionsType.LoadInitialPosts](context: ActionArguments): void;
}

export const postActions: ActionTree<State, State> & PostActions = {
  [PostActionsType.AddPost]({ commit }: { commit: any }, post: Post) {
    commit(PostMutationsType.AddPost, post);
  },
  [PostActionsType.RemovePost]({ commit }: { commit: any }, post: Post) {
    commit(PostMutationsType.RemovePost, post);
  },
  async [PostActionsType.LoadInitialPosts]({ commit }: { commit: any }) {
    const axios = inject('axios') as AxiosStatic;
    const response = await axios.get('/api/posts');
    const posts = response.data;
    commit(PostMutationsType.LoadInitial, posts);
  }
}
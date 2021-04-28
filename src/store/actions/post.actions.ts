import { Post, State } from "@app/models";
import { ActionTree } from "vuex";
import { useApiService } from "../../services/api.service";
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
    const { get } = useApiService();
    const posts = await get<Post[]>('/api/posts');
    commit(PostMutationsType.LoadInitial, posts);
  }
}
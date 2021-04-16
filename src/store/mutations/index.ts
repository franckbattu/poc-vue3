import { todoMutations } from "../mutations/todo.mutations";
import { postMutations } from "./post.mutations";

export const mutations = {
  ...todoMutations,
  ...postMutations
}
import { postGetters } from "./post.getters";
import { todoGetters } from "./todo.getters";

export const getters = {
  ...todoGetters,
  ...postGetters
};
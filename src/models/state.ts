import { Post } from "./post";
import { Todo } from "./todo";

export interface State {
  todos: Todo[];
  posts: Post[];
}
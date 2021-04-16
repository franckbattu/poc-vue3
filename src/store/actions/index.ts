import { postActions } from './post.actions';
import { todoActions } from './todo.actions';

export const actions = {
  ...todoActions,
  ...postActions
};
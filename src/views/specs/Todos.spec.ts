import { mount } from '@vue/test-utils';
import TodoList from '../views/Todos.vue';

describe('Todos', () => {
  it('should display title', () => {
    const msg = 'Mes todos';
    const wrapper = mount(TodoList);
    expect(wrapper.find('.title').text()).toEqual(msg);
  })
});
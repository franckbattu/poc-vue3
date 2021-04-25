import { mount } from '@vue/test-utils';
import TodoList from '../views/TodoList.vue';

describe('TodoList', () => {
  it('should display title', () => {
    const msg = 'Mes todos';
    const wrapper = mount(TodoList);
    expect(wrapper.find('.title').text()).toEqual(msg);
  })
});
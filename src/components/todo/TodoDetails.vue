<template>
  <div class="todo">
    <span class="description" :class="{ done: todo.completed }">
      {{ todo.title }}
    </span>
    <input type="checkbox" :checked="todo.completed" v-on:change="complete(todo)" />
  </div>
</template>

<script lang="ts">
import { Todo } from "@app/models";
import { useAppStore } from "@app/store";
import { defineComponent, PropType } from "vue";
import { TodoActionsType } from "../../store/actions/todo.actions";

export default defineComponent({
  name: "TodoDetails",
  props: {
    todo: Object as PropType<Todo>,
  },

  setup() {
    const store = useAppStore();

    const complete = (todo: Todo): void => {
      store.dispatch(TodoActionsType.CompletedTodo, {
        ...todo,
        completed: !todo.completed
      });
    }

    return {
      complete
    }
  }
});
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 10px 1rem;
  justify-content: space-between;
  text-align: left;
  background-color: var(--blue-ligthen-5);

  .description {
    &.done {
      text-decoration:line-through;
      text-decoration-color: var(--indigo-ligthen-1);
      text-decoration-thickness: 2px;
    }
  }
}
</style>
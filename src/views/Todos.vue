<template>
  <div class="container">
    <h1 class="title">Mes todos</h1>
    <h2 class="state">{{ todosCompleted }} complétées sur {{ totalTodos }}</h2>
    <div class="input">
      <TodoInput />
    </div>
    <div class="todos">
      <TodoDetails :todo="todo" v-for="todo in todos" :key="todo.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@app/models";
import { useAppStore } from "@app/store";
import { computed, ComputedRef, defineComponent } from "vue";
import { useCountService } from "@app/services";
import TodoDetails from "../components/todo/TodoDetails.vue";
import TodoInput from "../components/todo/TodoInput.vue";

export default defineComponent({
  name: "Todos",
  components: {
    TodoDetails,
    TodoInput,
  },

  setup() {
    const store = useAppStore();
    const todos: ComputedRef<Todo[]> = computed(() => store.getters.todos);
    const todosCompleted: ComputedRef<number> = computed(() => store.getters.completedTodos);
    const totalTodos = computed(() => todos.value.length);
    const { increase, decrease } = useCountService();
    
    return {
      todos,
      increase,
      decrease,
      todosCompleted,
      totalTodos
    };
  },
});
</script>

<style lang="scss" scoped>
.title {
  margin-top: 2rem;
  font-size: 2rem;
}

.container {
  margin-bottom: 1rem;
  width: 30%;
  margin: 1rem auto;
  text-align: center;
}

.input {
  margin: 1rem 0;
}

.todos {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>

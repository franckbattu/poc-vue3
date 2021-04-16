<template>
  <h1>Mes todos</h1>
  <div class="buttons">
    <button v-on:click="increase(2)">Incrémenter</button>
    <button @click="decrease()">Décrémenter</button>
  </div>
  <div v-for="todo in todos" :key="todo.id">
    {{ todo.title }} - {{ todo.completed }}
  </div>
</template>

<script lang="ts">
import { Todo } from "@app/models";
import { useAppStore } from "@app/store";
import { computed, ComputedRef, defineComponent, onUnmounted } from "vue";
import { useCountService } from "../services/counter.service";

export default defineComponent({
  name: "TodoList",

  setup() {
    const store = useAppStore();
    const todos: ComputedRef<Todo[]> = computed(() => store.getters.todos);

    const { increase, decrease, autoIncrement } = useCountService();
    const timer = autoIncrement();

    onUnmounted(() => {
      window.clearInterval(timer);
    });

    return {
      todos,
      increase,
      decrease,
    };
  },
});
</script>

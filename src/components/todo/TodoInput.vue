<template>
  <div class="input">
    <input
      type="text"
      v-model="title"
      v-on:keyup.enter="add()"
      placeholder="Ajouter une nouvelle Todo"
    />
    <button @click="add()">+</button>
  </div>
</template>

<script lang="ts">
import { useAppStore } from "@app/store";
import { defineComponent, ref } from "vue";
import { TodoActionsType } from "../../store/actions/todo.actions";

export default defineComponent({
  name: "TodoInput",

  setup() {
    const store = useAppStore();
    let title = ref("");

    const add = (): void => {
      if (title.value.length !== 0) {
        store.dispatch(TodoActionsType.AddTodo, {
          title: title.value,
          completed: false,
        });
        title.value = "";
      }
    };

    return {
      title,
      add,
    };
  },
});
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  vertical-align: middle;
  width: 100%;
  height: 2.5rem;
  gap: 1rem;

  input {
    border-radius: 4px;
    border: 1px solid #ccc;
    flex: 9;
    padding-left: 1rem;

    &::placeholder {
      font-family: var(--font);
    }
  }

  button {
    border-radius: 4px;
    border: none;
    outline: none;
    background-color: var(--blue-dark);
    color: var(--white);
    font-size: 1.5rem;
    flex: 1;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
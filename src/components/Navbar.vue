<template>
  <nav>
    <ul>
      <li><router-link :to="{ name: 'home' }" class="link">Home</router-link></li>
      <li><router-link :to="{ name: 'todos' }" class="link">To-do List ({{ totalTodos }})</router-link></li>
      <li><router-link :to="{ name: 'posts' }" class="link">Posts</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { useAppStore } from "@app/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",

  setup() {
    const store = useAppStore();
    const totalTodos = computed(() => store.getters.totalTodos);

    return {
      totalTodos
    }
  },
});
</script>

<style lang="scss" scoped>
nav {
  height: 50px;
}

ul {
  display: flex;
  background-color: var(--blue);
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;

  li {
    display: inline-block;

    .link {
      display: block;
      padding: 1rem 2rem;
      color: #fff;
      font-weight: 800;
      text-transform: uppercase;
      text-decoration: none;

      &:hover {
        background-color: var(--blue-dark);
      }
    }
  }
}
</style>
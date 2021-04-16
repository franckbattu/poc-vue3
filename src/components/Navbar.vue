<template>
  <nav>
    <ul>
      <li><router-link to="/" class="link">Home</router-link></li>
      <li><router-link to="/todos" class="link">TodoList</router-link></li>
      <li><router-link to="/posts" class="link">Posts</router-link></li>
      <li>Counter : {{ count }}</li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCountService } from "../services/counter.service";

export default defineComponent({
  name: "Navbar",

  setup() {
    const { count } = useCountService();
    
    return {
      count
    }
  },
});
</script>

<style lang="scss" scoped>
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
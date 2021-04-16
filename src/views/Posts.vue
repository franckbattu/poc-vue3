<template>
  <h1>Les différents posts</h1>
  <h2>Il y a actuellement : {{ totalTodos }} todos</h2>
    <div v-for="post in posts" :key="post.id">
    {{ post.title }} - {{ post.body }}
  </div>
</template>

<script lang="ts">
import { Post } from "@app/models";
import { useAppStore } from "@app/store";
import { computed, ComputedRef, defineComponent } from "vue";

export default defineComponent({
  name: 'Posts',
  
  setup() {
    const store = useAppStore();
    const posts: ComputedRef<Post[]> = computed(() => store.getters.posts);
    const totalTodos: ComputedRef<number> = computed(() => store.getters.totalTodos);

    return {
      posts,
      totalTodos
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
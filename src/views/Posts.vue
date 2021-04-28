<template>
  <div class="container">
    <h1 class="title">Les différents posts</h1>
    <div class="posts">
      <PostDetails :post="post" v-for="post in posts" :key="post.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from "@app/models";
import { useAppStore } from "@app/store";
import { computed, ComputedRef, defineComponent } from "vue";
import PostDetails from "../components/post/PostDetails.vue";

export default defineComponent({
  name: "Posts",
  components: {
    PostDetails,
  },
  setup() {
    const store = useAppStore();
    const posts: ComputedRef<Post[]> = computed(() => store.getters.posts);

    return {
      posts,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 0 1rem;
}

.title {
  margin-top: 2rem;
  font-size: 2rem;
}

.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @include m.screen(laptop) {
    grid-template-columns: 1fr;
  }
}
</style>
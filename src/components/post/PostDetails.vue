<template>
  <div class="card">
    <div class="card-body">
      <div class="title">
        {{ post.title }}
      </div>
      <div class="text">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from "@app/models";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: 'PostDetails',
  props: {
    post: Object as PropType<Post>
  }
})
</script>

<style lang="scss" scoped>
  .card {
    border: 1px solid #CCC;
    border-radius: 4px;
    padding: 0.8rem 0.5rem;

    &-body {
      display: flex;
      flex-direction: column;

      .title {
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
    }
  }
</style>
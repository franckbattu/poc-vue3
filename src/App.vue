<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, shallowRef, watch } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./components/layouts/DefaultLayout.vue";

export default defineComponent({
  name: "App",

  setup() {
    const route = useRoute();
    let layout = shallowRef(DefaultLayout);

    watch(
      () => route.meta,
      async (meta) => {
        if (meta.layout) {
          const component = await import(
            `./components/layouts/${meta.layout}.vue`
          );
          layout.value = component?.default || DefaultLayout;
        } else {
          layout.value = DefaultLayout;
        }
      },
      { immediate: true }
    );

    return {
      layout,
    };
  },
});
</script>
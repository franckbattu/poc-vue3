<template>
  <div class="app-container">
    <Navbar />
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./Navbar.vue";
import Footer from './Footer.vue';

export default defineComponent({
  name: "AdminLayout",
  components: {
    Navbar,
    Footer
  },
});
</script>

<style lang="scss">
.app-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
  font-size: 100%;

  > .content {
    flex-grow: 1;
  }
}
</style>
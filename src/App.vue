<template>
  <div class="app-container">
    <Navbar />
    <section class="content">
      <router-view></router-view>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from './components/Footer.vue';
import { useInitialStore } from "./services/initial-store.service";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    Footer
  },

  setup() {
    const { populateInitialData } = useInitialStore();
    populateInitialData();
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
<script setup>
import LayoutHeader from "@/components/Layout/Header.vue";
import LayoutSidebar from "@/components/Layout/Sidebar.vue";
import LayoutNavbar from "@/components/Layout/Navbar.vue";
import ColorPalette from "@/views/ColorPalette.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const pageTitle = computed(() => {
  return route.meta.title;
});

const isOpenMenu = ref(false);

const closeMenu = () => {
  isOpenMenu.value = false;
};

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleMenu">
      <font-awesome-icon 
        :icon="['fas', 'angle-right']" 
        :class="{ 'rotate-180': isOpenMenu }" 
      />
    </div>
    <layout-header @header-click="closeMenu" />
    <layout-navbar />
    <layout-sidebar :openSidebar="isOpenMenu" @close-sidebar="closeMenu"/>
    <div :class="['content', { content_full: !isOpenMenu }]">
      <div class="content-main">
        <div class="content-main__heading heading-4">
          {{ pageTitle }}
          <hr class="custom-line">
        </div>
        <div class="content-main__component">       
          <router-view />
        </div>
      </div>
      <div class="content-palette">
        <ColorPalette />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@forward "./styles/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 250px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}

.content-main {
  width: 60%;

  &__heading {
    padding: 0 30px;
    color: #313131;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__component {
    padding: 0 30px;
  }
}

.content-palette {
  width: 40%;
  padding: 0 30px;

}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 25px;
  background: var(--primary);
  height: 100%;
  z-index: 4;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.sidebar-toggle .svg-inline--fa {
  transition: transform 0.3s ease;
}

@media screen and (max-width: 1024px) {
  .content {
    margin-left: 0;
    flex-direction: column;
    gap: 30px;
  }

  .content-main {
    width: 100%;
  }

  .content-palette {
    width: 100%;
    padding: 0 30px;
  }
}

@media screen and (min-width: 480px) {
  .sidebar-toggle {
    display: none;
  }
}
</style>

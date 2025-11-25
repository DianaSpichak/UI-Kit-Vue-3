<script setup>
import { ref } from "vue";
import { NAVIGATION_LINKS } from "@/constants/navigation";

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true,
  },
});

const links = ref(NAVIGATION_LINKS);

const emit = defineEmits(['close-sidebar']);

const handleLinkClick = () => {
  emit('close-sidebar');
};
</script>

<template>
  <div :class="['sidebar', { sidebar_isopen: openSidebar }]" @click="handleLinkClick">
    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.href"
    >
    {{ link.name }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 0;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px 45px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  z-index: 3;
  &_isopen {
    transform: translateX(0px);
  }
  &__link {
    display: block;
    border-radius: 12px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      color: var(--primary);
    }
  }
}

@media screen and (min-width: 480px) {
  .sidebar {
    display: none;
  }
}
</style>

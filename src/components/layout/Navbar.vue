<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { NAVIGATION_LINKS } from "@/constants/navigation";

const links = ref(NAVIGATION_LINKS);

const navbar = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

function updateScrollButtons() {
  if (!navbar.value) return;
  
  const { scrollLeft, scrollWidth, clientWidth } = navbar.value;
  canScrollLeft.value = scrollLeft > 0;
  canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 1;
}

function scroll(amount) {
  if (navbar.value) {
    navbar.value.scrollBy({ left: amount, behavior: 'smooth' });
  }
}

onMounted(() => {
  if (navbar.value) {
    navbar.value.addEventListener('scroll', updateScrollButtons);
    updateScrollButtons();
  }
});

onUnmounted(() => {
  if (navbar.value) {
    navbar.value.removeEventListener('scroll', updateScrollButtons);
  }
});
</script>

<template>
    <div class="navbar-scroll-container">
         <div class="navbar navbar--scrollable" ref="navbar">
            <router-link
                class="navbar__link"
                v-for="link in links"
                :key="link.name"
                :to="link.href"
            >
            {{ link.name }}
            </router-link>

            <button 
                v-if="canScrollLeft" 
                class="navbar__scroll-btn navbar__scroll-btn--left"
                @click="scroll(-150)"
            >
              <font-awesome-icon :icon="['fas', 'angle-left']" />
            </button>
            <button 
            v-if="canScrollRight" 
            class="navbar__scroll-btn navbar__scroll-btn--right"
            @click="scroll(150)"
            >
              <font-awesome-icon :icon="['fas', 'angle-right']" />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar-scroll-container {
  position: relative;
  height: 62px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 50px;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
}

.navbar--scrollable {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  overflow-x: auto;
}

.navbar--scrollable::-webkit-scrollbar {
  display: none;
}

.navbar__scroll-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 1;
  margin: 0 10px;
}

.navbar__scroll-btn--left {
  left: 0;
}

.navbar__scroll-btn--right {
  right: 0;
}

@media screen and (max-width: 480px) {
  .navbar-scroll-container {
    display: none;
  }
}
</style>

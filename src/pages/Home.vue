<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { userToken } from "../store/authStore";

import IntroAutho from "../components/author/IntroAutho.vue";
import HomeHero from "../components/heroes/HomeHero.vue";
import HomeBoss from "../components/Boss/HomeBoss.vue";
import HomeAutho from "../components/author/HomeAutho.vue";

const observer1 = ref(null);
const observer2 = ref(null);
const observer3 = ref(null);

// observe header
const rootHeader = ref(null);
const isHeaderIntersected = ref(true);

// observe hero sections
const rootHero = ref(null);
const isHeroIntersected = ref(false);

// observe boss sections
const rootBoss = ref(null);
const isBossIntersected = ref(false);

onMounted(() => {
  // header
  observer1.value = new IntersectionObserver(
    (entries) => {
      // console.log(entries[0].target);
      if (entries[0] && entries[0].isIntersecting) {
        // console.log(`header is intersecting`);
        isHeaderIntersected.value = true;
      } else {
        // console.log(`header is not intersecting`);
        isHeaderIntersected.value = false;
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-100px",
    }
  );

  observer1.value.observe(rootHeader.value);

  // hero
  observer2.value = new IntersectionObserver(
    (entries) => {
      // console.log(entries[0].target);
      if (entries[0] && entries[0].isIntersecting) {
        // console.log(`hero is intersecting`);
        isHeroIntersected.value = true;
      } else {
        // console.log(`hero is not intersecting`);
        isHeroIntersected.value = false;
      }
    },
    {
      root: null,
      threshold: 0.2,
    }
  );

  observer2.value.observe(rootHero.value);

  // hero
  observer3.value = new IntersectionObserver(
    (entries) => {
      // console.log(entries[0].target);
      if (entries[0] && entries[0].isIntersecting) {
        // console.log(`hero is intersecting`);
        isBossIntersected.value = true;
      } else {
        // console.log(`hero is not intersecting`);
        isBossIntersected.value = false;
      }
    },
    {
      root: null,
      threshold: 0.2,
    }
  );

  observer3.value.observe(rootBoss.value);
});

onUnmounted(() => {
  observer1.value.disconnect();
  observer2.value.disconnect();
  observer3.value.disconnect();
});

const isAuthenticated = computed(() => {
  return !!userToken.value;
});
</script>

<template>
  <nav :class="{ sticky: !isHeaderIntersected }">
    <the-header v-if="isAuthenticated"></the-header>
    <the-home-header btnMode="home-enable" v-else></the-home-header>
  </nav>

  <main>
    <div class="section-header" ref="rootHeader">
      <IntroAutho></IntroAutho>
    </div>

    <section
      class="section-hero"
      ref="rootHero"
      :class="{ 'pop-up': isHeroIntersected }"
    >
      <h3 class="subhead-hero">Domain I</h3>
      <h2 class="head-hero">the felicitous Cat Tribe emerges</h2>

      <HomeHero></HomeHero>
    </section>

    <section
      class="section-boss"
      ref="rootBoss"
      :class="{ 'pop-up': isBossIntersected }"
    >
      <h3>subHead</h3>
      <h2>Head</h2>

      <HomeBoss></HomeBoss>
    </section>

    <section class="section-footer">
      <base-card mode="card">
        <HomeAutho></HomeAutho>
      </base-card>
    </section>
  </main>
</template>

<style scoped>
/* general */

section {
  padding: 9.6vmin 4vmin;
}

.moving-from-left {
  transform: translateX(0);
}

.sticky {
  position: fixed;
  top: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  opacity: 0.8;
  z-index: 99;
}

.sticky .section-header {
  margin-top: 9.6rem;
}

h2 {
  margin-bottom: 4.8vmin;
  font-size: 4vmin;
}

/* header */

.section-header {
  padding: 9.6vmin 4vmin;
  display: flex;
  align-items: center;
  /* height: 100vh; */
}

.section-header,
.section-boss {
  background-color: #0d9488;
}

.subhead-hero,
.head-hero {
  text-align: center;
}

/* hero */

.section-hero,
.section-boss,
.section-footer {
  opacity: 0;
  transform: scale(0);
}

.section-hero,
.section-footer {
  background-color: #f0fdfa;
}

.pop-up {
  opacity: 1;
  transform: scale(1);
  transition: all 0.4s ease-in;
}
</style>

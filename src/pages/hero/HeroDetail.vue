<script setup>
import { useRoute } from "vue-router";
import { computed, inject } from "vue";

const route = useRoute();
const heroes = inject("heroes");

// console.log(route.params.id);

const selectedHero = computed(() => {
  return heroes.value.find((hero) => hero.id === route.params.id);
});

const selectedBackground1 = computed(() => {
  return route.params.id === "1";
});

const selectedBackground2 = computed(() => {
  return route.params.id === "2";
});

const heroId = computed(() => selectedHero.value.id);
const heroName = computed(() => selectedHero.value.name);
const heroHp = computed(() => selectedHero.value.hp);
const heroAtk = computed(() => selectedHero.value.atk);
const heroSAtk = computed(() => selectedHero.value.sAtk);
const heroTitle = computed(() => selectedHero.value.title);
const heroDescription1 = computed(() => selectedHero.value.descriptionOne);
const heroDescription2 = computed(() => selectedHero.value.descriptionTwo);
const heroDescription3 = computed(() => selectedHero.value.descriptionThree);
const heroDescription4 = computed(() => selectedHero.value.descriptionFour);
const heroDescription5 = computed(() => selectedHero.value.descriptionFive);
const heroDescription6 = computed(() => selectedHero.value.descriptionSix);

const setBtnMode = computed(() => {
  if (heroId.value === "1") {
    return "neutral-enable";
  }
  if (heroId.value === "2") {
    return "blue-enable";
  }
});
</script>

<template>
  <the-header :mode="heroName" :btnMode="setBtnMode"></the-header>
  <section
    :class="{
      amaraBg: selectedBackground1,
      elaraBg: selectedBackground2,
      amaraInfo: selectedBackground1,
      elaraInfo: selectedBackground2,
    }"
  >
    <div>
      <base-card>
        <h2>{{ heroTitle }}</h2>
      </base-card>
    </div>
    <div>
      <base-card>
        <p>{{ heroDescription1 }}</p>
        <p>{{ heroDescription2 }}</p>
        <p>{{ heroDescription3 }}</p>
        <p>{{ heroDescription4 }}</p>
        <p>{{ heroDescription5 }}</p>
        <p>{{ heroDescription6 }}</p>
      </base-card>
    </div>

    <div>
      <base-card>
        <h2>{{ heroName }}: status</h2>
        <ul>
          <li>Health Point: {{ heroHp }} points</li>
          <li>Attack Range: {{ heroAtk }} damanges</li>
          <li>Shadow Range: {{ heroSAtk }} damanges</li>
        </ul>

        <div>
          <base-button link to="/Home">Proceed</base-button>
        </div>
      </base-card>
    </div>
  </section>
</template>

<style scoped>
section {
  overflow-y: scroll;
  padding: 1vmin 0;
  display: flex;
  flex-direction: column;
  gap: 1vmin;
  padding: 4rem;
}

h2 {
  text-align: center;
  text-transform: capitalize;
}

.amaraBg {
  width: 100vw;
  height: 100%;
  background-image: url("../../assets/heroes/bg.png");
  background-position: center 100%;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.elaraBg {
  width: 100vw;
  height: 100%;
  background-image: url("../../assets/heroes/bg2.png");
  background-position: center 100%;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.amaraInfo {
  color: #f8fafc;
}

.elaraInfo {
  color: #ecfeff;
}
</style>

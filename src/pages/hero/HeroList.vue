<script setup>
import { inject } from "vue";

const heroes = inject("heroes");

function heroDetail(id) {
  return `/hero/${id}`;
}
</script>

<template>
  <the-header mode="stone" btnMode="stone-enable"></the-header>
  <section>
    <div class="img-container" v-for="hero in heroes" :key="hero.id">
      <h2>{{ hero.name }}</h2>
      <base-card>
        <img :src="hero.imgUrl" draggable="false" />
      </base-card>
      <div class="btn">
        <base-button mode="stone-enable" link :to="heroDetail(hero.id)"
          >View Details</base-button
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100vw;
  height: 100vh;

  background-image: url("../../assets/heroes/castle2.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.img-container {
  position: relative;
  width: 45vmin;
  /* padding: 1.2vmin 1.2vmin; */
  opacity: 0.6;
  transition: all 0.5s ease-out;
}

.img-container:hover {
  opacity: 1;
}

img {
  width: 100%;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  transition: all 0.5s ease-out;
}

img:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
}

.btn {
  position: absolute;
  bottom: -1%;
  right: 50%;
  transform: translateX(50%);
}

h2 {
  position: absolute;
  top: -9%;
  right: 50%;
  transform: translateX(50%);
  font-size: 3vmin;
  background: linear-gradient(#292524, #0c0a09);
  color: #f0fdfa;
  padding: 0.6vmin 1.6vmin;
  border-radius: 5px;
  text-transform: uppercase;
}
</style>

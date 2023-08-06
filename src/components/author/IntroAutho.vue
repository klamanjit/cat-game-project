<script setup>
import { useRouter } from "vue-router";
import { userToken } from "../../store/authStore.js";
import { computed, inject } from "vue";
import { PlusIcon } from "@heroicons/vue/24/solid";

const heroes = inject("heroes");
const angels = inject("angels");
const demons = inject("demons");

const router = useRouter();

const isLogin = computed(() => {
  return !!userToken.value;
});

function loginPath() {
  router.push("/auth");
}
</script>

<template>
  <div class="header-container">
    <div class="header-text">
      <h2>"A Battle Against the Robotic Menace"</h2>
      <p>
        In a spectacular showdown of wits and valor, the Cat Tribe's unwavering
        determination and mystical prowess finally triumph over the malevolent
        robotic menace, restoring hope, harmony, and freedom to a world once
        shrouded in darkness.
      </p>

      <button class="btn-login" @click="loginPath" v-if="!isLogin">
        Login
      </button>

      <button>learn more &darr;</button>
    </div>
    <div class="image-container">
      <img
        src="../../assets/home/4.png"
        alt="robotic-cat"
        class="header-image"
      />
    </div>

    <div class="badge-container">
      <div class="badges-hero">
        <img
          v-for="hero in heroes"
          :key="hero.id"
          :src="hero.imgUrl"
          class="badge-img"
        />

        <img
          v-for="angel in angels"
          :key="angel.id"
          :src="angel.imagUrl"
          class="badge-img"
        />

        <img
          v-for="demon in demons"
          :key="demon.id"
          :src="demon.imagUrl"
          class="badge-img"
        />
        <div class="icon-container">
          <PlusIcon class="icon"></PlusIcon>
          <PlusIcon class="icon"></PlusIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  /* height: 30rem; */
}

.header-text {
  padding: 0 3.2vmin;
}

.image-container {
  justify-self: center;
  /* padding: 0 5vmin; */
}

h2 {
  font-size: 3rem;
  line-height: 5vmin;
  margin-bottom: 3.2vmin;
}

p {
  color: #f0fdfa;
  font-size: 2vmin;
  margin-bottom: 1.4vmin;
}

.btn-container {
  display: flex;
  gap: 1vmin;
}

button {
  background-color: #f0fdfa;
  color: #042f2e;
  font-size: 1.7vmin;
  text-decoration: none;
  padding: 0.6vmin 1.2vmin;
  height: 5vmin;
  margin-right: 1.2vmin;

  border: none;
  border-radius: 2px;
  transition: all 0.3s ease-in;
  cursor: pointer;
  transition: all 0.3s ease-in;
}

button:hover {
  background-color: #042f2e;
  color: #f0fdfa;
}

.btn-login {
  background-color: #042f2e;
  color: #f0fdfa;
}

.btn-login:hover {
  background-color: #f0fdfa;
  color: #042f2e;
}

.header-image {
  width: 100%;
  height: 40vmin;
  object-position: 0% 0%;
  object-fit: cover;
  border-radius: 5px;
}

.badge-container {
  grid-column: 1/-1;
  justify-self: center;
  margin-top: 1.2vmin;
  padding: 5vmin 0;
}

.badge-img {
  width: 5vmin;
  height: 5vmin;
  object-fit: cover;
  object-position: 50% 0;
  border-radius: 50%;
  border: 1px solid #f0fdfa;
  margin-left: -1.2vmin;
}

.icon-container {
  display: inline-block;
  align-items: center;
  width: 5vmin;
  height: 5vmin;
  position: relative;
}

.icon {
  width: 24px;
  height: 24px;
  fill: #f0fdfa;
  position: absolute;
  top: 25%;
}

.icon:nth-child(2) {
  left: 40%;
  top: 25%;
}
</style>

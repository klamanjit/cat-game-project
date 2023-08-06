<script setup>
import { ref, provide } from "vue";
import imgDemon from "../../assets/boss/imgsDemon/1.png";
import imgAngel from "../../assets/boss/imgsAngel/1.png";
const bosses = ref([
  {
    id: "1",
    name: "Robotic Demons",
    imgUrl: imgDemon,
  },
  {
    id: "2",
    name: "Robotic Angels",
    imgUrl: imgAngel,
  },
]);

function bossDetail(id) {
  return `/boss/${id}`;
}

provide("bosses", bosses);
</script>

<template>
  <the-header mode="slate" btnMode="slate-enable"></the-header>
  <section>
    <div class="img-container" v-for="boss in bosses" :key="boss.id">
      <h2>{{ boss.name }}</h2>
      <base-card>
        <img :src="boss.imgUrl" draggable="false" />
      </base-card>
      <div class="btn">
        <base-button link :to="bossDetail(boss.id)" mode="slate-enable"
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

  /* background-image: url("../../assets/boss/7.jpg"); */
  background-image: url("../../assets/home/1.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.img-container {
  position: relative;
  width: 45vmin;
  /* padding: 1.2vmin 1.2vmin; */
  opacity: 0.7;
  transition: all 0.5s ease-out;
}

.img-container:hover {
  opacity: 1;
}

img {
  width: 100%;

  box-shadow: 0 2px 6px rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  transition: all 0.5s ease-out;
}

img:hover {
  box-shadow: 0 2px 6px rgba(255, 255, 255, 0.8);
}

.btn {
  position: absolute;
  bottom: -1%;
  right: 50%;
  transform: translateX(50%);
}

h2 {
  position: absolute;
  top: -15%;
  right: 50%;
  transform: translateX(50%);
  font-size: 2.1vmin;
  background: #f8fafc;
  border: 1px solid #042f2e;
  color: #0f172a;
  padding: 0.6vmin 1.6vmin;
  border-radius: 5px;
  text-transform: uppercase;
}
</style>

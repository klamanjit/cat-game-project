<script setup>
import { inject } from "vue";

const angels = inject("angels");
const demons = inject("demons");
</script>

<template>
  <div class="container">
    <div class="angels-container">
      <div class="image-container" v-for="angel in angels" :key="angel.id">
        <img :src="angel.imagUrl" />
      </div>
    </div>

    <div>
      <h2>Home Boss</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci
        sunt quos labore odit inventore modi. Cumque animi dolorem ab excepturi
        unde corporis iure, in dignissimos, a neque non nihil.
      </p>
    </div>
  </div>

  <div class="container">
    <div>
      <h2>Home Boss</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci
        sunt quos labore odit inventore modi. Cumque animi dolorem ab excepturi
        unde corporis iure, in dignissimos, a neque non nihil.
      </p>
    </div>

    <div class="demons-container">
      <div class="image-container" v-for="demon in demons" :key="demon.id">
        <img :src="demon.imagUrl" />
      </div>
    </div>
  </div>

  <div class="btn-container">
    <base-button link to="/boss">Boses</base-button>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2vmin;
  margin-bottom: 4.8vmin;
}

.angels-container,
.demons-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1vmin;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn-container {
  text-align: center;
}
</style>

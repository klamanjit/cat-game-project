<script setup>
import { inject } from "vue";

const heroes = inject("heroes");
</script>

<template>
  <div></div>

  <div class="container">
    <div v-for="hero in heroes" :key="hero.id">
      <div class="hero-container" v-if="hero.id === '1'">
        <div class="image-container">
          <img :src="hero.imgUrl" />
        </div>
        <div>
          <p>01</p>
          <p>Shadow</p>
          <p>
            Within the depths of an ancient, mystical forest, a fearless and
            formidable society thrives—the Cat Warrior Tribe. Cloaked in the
            shadows of verdant canopies, their sleek ebony, majestic silver, and
            regal golden pelts blend seamlessly with the dappled moonlight that
            filters through the foliage. Emanating an aura of ancient wisdom,
            their eyes glimmer with an intense, resolute fire that mirrors the
            spirit of untamed determination burning within each warrior's heart.
            Trained from birth in the art of combat and nurtured by the whispers
            of forgotten ancestors, the Cat Warriors move with unparalleled
            grace and lethal precision, their nimble paws and razor-sharp claws
            serving as the instruments of justice and protection. Uniting as a
            harmonious symphony of strength, they form an indomitable force,
            upholding the virtues of honor, bravery, and compassion. These
            celestial guardians stand ready to defend their realm from the
            malevolent encroachment of robotic invaders, a testament to the
            unyielding courage and tenacity that defines the legendary Cat
            Warrior Tribe.
          </p>
        </div>
      </div>

      <!-- change hero -->
      <div class="hero-container" v-else>
        <div>
          <p>02</p>
          <p>Frost</p>
          <p>
            High in the icy peaks of the Frostfang Mountains, a mystical and
            enigmatic society thrives—the Cat Frost Sorcerers Tribe. Cloaked in
            shimmering coats of frost-kissed fur, they blend seamlessly with the
            glacial landscape, their cerulean, amethyst, and opalescent eyes
            holding the secrets of a world unseen by mortal eyes. Masters of
            elemental magic, they command the power of winter itself, weaving
            intricate spells that summon blizzards, crystallize foes, and
            conjure dancing auroras in the night sky. Each Frost Sorcerer is a
            guardian of the delicate balance between nature and ice, harnessing
            the frigid winds and snowflakes as their allies. As they move
            gracefully through the snow-laden terrain, they leave a trail of
            frozen enchantment in their wake. United by their devotion to the
            ancient art of sorcery, the Cat Frost Sorcerers forge a bond with
            the spirits of frost and cold, becoming one with the very essence of
            winter's majesty. When the robotic invaders dare to encroach upon
            their frozen sanctuary, the Cat Frost Sorcerers rise like an
            ethereal tempest, ready to defend their homeland with a symphony of
            chilling spells and mystical prowess, forever preserving the sacred
            harmony between ice and magic.
          </p>
        </div>
        <div class="image-container">
          <img :src="hero.imgUrl" />
        </div>
      </div>
    </div>
  </div>
  <div class="btn-container">
    <base-button link to="/hero">Heroes</base-button>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}

h2,
p {
  text-align: center;
  color: #0f766e;

  padding: 1.2vmin 2vmin;
  border-radius: 5px;
}

.hero-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2vmin;
  align-items: center;
  margin-bottom: 4.8vmin;
}

.btn-container {
  text-align: center;
}

.image-container {
  text-align: center;
  display: block;
  position: relative;
}

.image-container::before,
.image-container::after {
  content: "";
  display: block;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.image-container::before {
  width: 90%;
  height: 115%;

  background-color: #99f6e4;
  z-index: -1;
}

.image-container::after {
  width: 85%;
  height: 110%;

  background-color: #ccfbf1;
  z-index: -1;
}

img {
  width: 25rem;
  height: 30rem;
  /* object-fit: cover; */
  object-position: 50% 0;
  justify-self: center;
  border-radius: 5px;
}
</style>

<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid";
import { ArrowLeftOnRectangleIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: "teal",
  },

  btnMode: {
    type: String,
    required: false,
  },
});
</script>
<!-- <template>
  <nav :class="mode">
    <p>Img</p>
    <ul>
      <HomeIcon class="icon"></HomeIcon>
      <li>
        <base-button :mode="btnMode" link to="/home">Home</base-button>
      </li>
      <ArrowRightOnRectangleIcon class="icon"></ArrowRightOnRectangleIcon>
      <li><base-button :mode="btnMode" link to="/auth">Login</base-button></li>
    </ul>
  </nav>
</template> -->

<template>
  <nav :class="mode">
    <p>Img</p>
    <ul>
      <li>
        <base-button :mode="btnMode" link to="/home"
          ><HomeIcon class="icon"></HomeIcon
        ></base-button>
      </li>

      <li>
        <base-button :mode="btnMode" link to="/auth"
          ><ArrowLeftOnRectangleIcon class="icon"></ArrowLeftOnRectangleIcon
        ></base-button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 5vmin;
  padding: 1.2vmin 2.2vmin;
}

ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vmin;
  list-style: none;
}

.teal {
  /* background: linear-gradient(90deg, #dcfce7, #86efac); */
  background-color: #0d9488;
}

.green {
  background: linear-gradient(90deg, #134e4a, #042f2e);
}

.slate {
  background: linear-gradient(90deg, #334155, #1e293b);
}

.amara {
  background: linear-gradient(90deg, #171717, #0a0a0a);
}

.elara {
  background: linear-gradient(90deg, #164e63, #083344);
}

.icon {
  fill: #042f2e;
  width: 4.8rem;
  height: 4.8rem;
}
</style>

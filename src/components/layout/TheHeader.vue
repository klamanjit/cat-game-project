<script setup>
import { userToken } from "../../store/authStore";
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

function removeLocalStore() {
  localStorage.removeItem("token");
  localStorage.removeItem("tokenExpiration");
  localStorage.removeItem("userId");
}
</script>
<template>
  <nav :class="mode">
    <p>Img</p>
    <ul>
      <li><base-button :mode="btnMode" link to="/home">Home</base-button></li>
      <li>
        <base-button :mode="btnMode" link to="/auth" @click="removeLocalStore"
          >Logout</base-button
        >
      </li>
      <li><base-button :mode="btnMode" link to="/hero">Heroes</base-button></li>
      <li><base-button :mode="btnMode" link to="/boss">Bosses</base-button></li>
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
  /* gap: 1vmin; */
  list-style: none;
}

.teal {
  /* background: linear-gradient(90deg, #dcfce7, #86efac); */
  background-color: #0d9488;
}
.stone {
  background: linear-gradient(90deg, #292524, #0c0a09);
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
</style>

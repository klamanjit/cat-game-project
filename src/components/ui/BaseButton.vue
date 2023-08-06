<script setup>
const props = defineProps({
  link: {
    type: Boolean,
    required: false,
    default: false,
  },
  to: {
    type: String,
    required: false,
    default: "/",
  },

  mode: {
    type: String,
    required: false,
    default: "green-enable",
  },

  data: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(["open"]);

function tryOpen() {
  emit("open", props.data);
}
</script>

<template>
  <button v-if="!link" :class="mode" @click="tryOpen" data-id="data">
    <slot></slot>
  </button>

  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<style scoped>
button,
a {
  font-family: inherit;
  font-size: 1.7vmin;
  text-decoration: none;
  padding: 0.6vmin 1.2vmin;

  margin-right: 1rem;

  border: none;
  border-radius: 2px;
  transition: all 0.3s ease-in;
  cursor: pointer;
}

button:hover,
a:hover {
  background-color: #f0fdfa;
  color: #042f2e;
  /* border: 1px solid #115e59; */
}

/* Soft bg */

.neutral-enable {
  background-color: #fafafa;
  color: #0a0a0a;
  transition: all 0.3s ease-in;
}

.neutral-enable:hover {
  background-color: #0a0a0a;
  color: #fafafa;
  /* border: 1px solid #fafafa; */
}

.blue-enable {
  background-color: #f9fafb;
  color: rgba(10, 10, 69);
  transition: all 0.3s ease-in;
}

.blue-enable:hover {
  background-color: rgba(10, 10, 69, 0.75);
  color: #f9fafb;
  /* border: 1px solid #f9fafb; */
}

.red-enable {
  background-color: #f9fafb;
  color: rgba(69, 10, 10);
  transition: all 0.3s ease-in;
}

.red-enable:hover {
  background-color: rgba(69, 10, 10, 0.75);
  color: #f9fafb;
  /* border: 1px solid #f9fafb; */
}

/* Intense bg */

.home-enable {
  /* background-color: #115e59; */
  display: flex;
  align-items: center;
  justify-items: center;
  color: #f0fdfa;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
}

.home-enable:hover {
  background-color: #f0fdfa;
  color: #115e59;
}
.green-enable {
  background-color: #115e59;
  color: #f0fdfa;
}

.green-enable:hover {
  background-color: #f0fdfa;
  color: #042f2e;
  /* border: 1px solid #115e59; */
}

.slate-enable {
  background-color: #0f172a;
  color: #f8fafc;
  transition: all 0.3s ease-in;
}

.slate-enable:hover {
  background-color: #f8fafc;
  color: #0f172a;
  /* border: 1px solid #0f172a; */
}

.stone-enable {
  background-color: #1c1917;
  color: #fafaf9;
  transition: all 0.3s ease-in;
}

.stone-enable:hover {
  background-color: #fafaf9;
  color: #1c1917;
  /* border: 1px solid #1c1917; */
}
</style>

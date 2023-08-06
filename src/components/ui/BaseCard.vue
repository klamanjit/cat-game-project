<script setup>
const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: "dialog",
  },
});
</script>

<template>
  <div :class="mode">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  max-width: 40vmin;
  border-radius: 12px;
  padding: 1vmin;
  margin: 20vmin auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.dialog {
  padding: 1vmin;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  max-width: 60vmin;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in;
}

.dialog:hover {
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.7);
}
</style>

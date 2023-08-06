<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  mode: {
    type: String,
    required: false,
    default: "dialog-demon",
  },

  backdrop: {
    type: String,
    required: false,
    default: "backdrop-demon",
  },

  id: {
    type: String,
  },
});

const emit = defineEmits(["close"]);

function tryClose() {
  emit("close");
}
</script>

<template>
  <div :class="backdrop" v-if="show" @click="tryClose"></div>
  <transition name="dialog">
    <dialog open v-if="show" :class="mode">
      <slot> </slot>
      <div class="btn-container">
        <base-button :mode="id" @click="tryClose">Close</base-button>
        <base-button :mode="id">Proceed</base-button>
      </div>
    </dialog>
  </transition>
</template>

<style scoped>
.backdrop-demon {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(69, 10, 10, 0.75);
  z-index: 10;
}

.backdrop-angel {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(10, 10, 69, 0.75);
  z-index: 10;
}

.dialog-demon {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vmin;
  height: 30vmin;
  background-color: rgb(0, 0, 0, 0.1);
  color: #fff;
  z-index: 100;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 6px rgba(255, 0, 0, 0.3);
  transition: all 0.4s ease;
}

.dialog-demon:hover {
  box-shadow: 0 2px 6px rgba(255, 0, 0, 0.8);
}

.dialog-angel {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vmin;
  height: 30vmin;
  background-color: rgb(255, 255, 255, 0.1);
  color: #fff;
  z-index: 100;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 255, 0.3);
  transition: all 0.4s ease;
}

.dialog-angel:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 255, 0.8);
}

dialog {
  position: relative;
}

.btn-container {
  position: absolute;
  display: flex;
  gap: 1vmin;
  bottom: -3%;
}

/* trasition */

.dialog-enter-active {
  transition: all 0.01s ease-out;
}

.dialog-leave-active {
  transition: all 0.5 ease-in;
}

.dialog-enter-from,
.dialog-leave-to {
  transform: scale(0.2);
  opacity: 0;
}

.dialog-enter-to,
.dialog-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>

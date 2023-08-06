<script setup>
import { ref, inject, computed } from "vue";
import { useRoute } from "vue-router";
import BossDialog from "../../components/Boss/BossDialog.vue";

// props
const props = defineProps(["id"]);

// data
const demons = inject("demons");
const angels = inject("angels");

const route = useRoute("BossDialog");

const selectedBoss = computed(() => {
  if (route.params.id === "1") {
    return demons.value;
  } else if (route.params.id === "2") {
    return angels.value;
  }
});

const bossesHeader = computed(() => {
  if (route.params.id === "1") {
    return "demons";
  } else if (route.params.id === "2") {
    return "angels";
  }
});

const demonsHeaderColor = computed(() => {
  if (props.id === "1") {
    return true;
  } else {
    return false;
  }
});

const angelsHeaderColor = computed(() => {
  if (props.id === "2") {
    return true;
  } else {
    return false;
  }
});

// dialog

const isOpen = ref(false);
const bossInfo = selectedBoss.value;
const bossName = ref("null");
const bossHp = ref("null");
const bossAtk = ref("null");
const bossSAtk = ref("null");
const bossDef = ref("null");

function openDialog(btnId) {
  isOpen.value = true;

  const selectedBossForDialog = bossInfo.find((boss) => boss.id === btnId);
  bossName.value = selectedBossForDialog.name;
  bossHp.value = selectedBossForDialog.hp;
  bossAtk.value = selectedBossForDialog.atk;
  bossSAtk.value = selectedBossForDialog.sAtk;
  bossDef.value = selectedBossForDialog.def;
}

const selectMode = computed(() => {
  if (props.id === "1") {
    return "dialog-demon";
  }
  if (props.id === "2") {
    return "dialog-angel";
  }
});

const selectedBackdrop = computed(() => {
  if (props.id === "1") {
    return "backdrop-demon";
  }
  if (props.id === "2") {
    return "backdrop-angel";
  }
});

const selectedBtnMode = computed(() => {
  if (props.id === "1") {
    return `red-enable`;
  }
  if (props.id === "2") {
    return `blue-enable`;
  }
});

// mouse event
const mouseDownPosition = ref(0);
const newMovePercentage = ref(0);
const prevPercentage = ref(0);
const prevPosition = ref(0);

window.onmousedown = (e) => {
  mouseDownPosition.value = e.clientX;
};

window.onmousemove = (e) => {
  const mouseDelta = mouseDownPosition.value - e.clientX;
  const maxPosition = window.innerWidth / 2;
  const percentage = (mouseDelta / maxPosition) * -100;

  newMovePercentage.value =
    Math.min(prevPosition.value + percentage, 0) &&
    Math.max(prevPosition.value + percentage, -100);

  if (mouseDownPosition.value === 0) {
    return;
  }

  prevPercentage.value = newMovePercentage.value;

  const container = document.querySelector(".container");
  const imgs = document.querySelectorAll("img");
  if (!container) return;
  container.animate(
    {
      transform: `translate(${newMovePercentage.value}%, 0)`,
    },
    {
      duration: 1200,
      fill: "forwards",
    }
  );

  imgs.forEach((img) => {
    img.animate(
      {
        objectPosition: `${newMovePercentage.value + 100}% 50%`,
      },
      {
        duration: 1200,
        fill: "forwards",
      }
    );
  });
};

window.onmouseup = (e) => {
  mouseDownPosition.value = 0;
  prevPosition.value = prevPercentage.value;
};
</script>

<template>
  <the-header mode="slate" :btnMode="selectedBtnMode"></the-header>

  <BossDialog
    :show="isOpen"
    @close="isOpen = false"
    :mode="selectMode"
    :backdrop="selectedBackdrop"
    :id="selectedBtnMode"
  >
    <ul class="dialog-container">
      <h3 class="boss-dialog-header">{{ bossName }}</h3>
      <li>Health : {{ bossHp }} hp</li>
      <li>Attack : {{ bossAtk }} damanges</li>
      <li>sAttack : {{ bossSAtk }} damanges</li>
      <li>Defend : {{ bossDef }} damanges</li>
    </ul>
  </BossDialog>

  <section>
    <h2 :class="{ demons: demonsHeaderColor, angels: angelsHeaderColor }">
      Robotic {{ bossesHeader }}
    </h2>
    <div class="container">
      <div class="image-container" v-for="boss in selectedBoss" :key="boss.id">
        <base-card>
          <img :src="boss.imagUrl" draggable="false" />
        </base-card>
        <div class="btn">
          <base-button
            @open="openDialog"
            :data="boss.id"
            :mode="selectedBtnMode"
          >
            Select</base-button
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  position: relative;
  background-color: #030712;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

h2 {
  margin: 0;
  display: inline-block;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.7);
  font-size: 4.8vmin;
  text-transform: uppercase;
  padding: 0.6vmin 1vmin;
}

.demons {
  background: linear-gradient(#991b1b, #450a0a);
  color: #fef2f2;
  transition: all 0.3s ease-in;
}

.demons:hover {
  background: #fef2f2;
  color: #450a0a;
  box-shadow: 0 2px 8px rgba(255, 0, 0, 0.5);
}

.angels {
  background: linear-gradient(#1e40af, #172554);
  color: #eff6ff;
  transition: all 0.3s ease-in;
}

.angels:hover {
  background: #eff6ff;
  color: #172554;
  box-shadow: 0 2px 6px rgba(0, 0, 255, 0.5);
}

.container {
  display: flex;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-0, 0);
  gap: 4vmin;
}

.image-container {
  position: relative;
}

img {
  width: 40vmin;
  height: 56vmin;
  object-fit: cover;
  object-position: 100% 50%;
}

.btn {
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
}

.dialog-container {
  position: relative;
  list-style: none;
}

.boss-dialog-header {
  position: absolute;
  top: -14vmin;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3.2vmin;
  background-color: #f9fafb;
  color: #030712;
  padding: 0.6vmin 1vmin;
  border-radius: 5px;
}

li {
  font-size: 2vmin;
}

/* trasition */
</style>

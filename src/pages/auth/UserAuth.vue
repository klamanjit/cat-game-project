<script setup>
import { computed, ref, reactive, onUnmounted } from "vue";
import { useRouter } from "vue-router";

// route
const router = useRouter();

// auth
const auth = reactive({
  userId: null,
  token: null,
  didAutoLogout: false,
});

// get items from local storage
const localUserId = localStorage.getItem("userId");

const isAuthenticated = computed(() => {
  return !!localUserId;
});

// form data

const mode = ref("login");
const email = ref("");
const password = ref("");
const formISvalid = ref(true);
// const isLoading = ref(false);
const error = ref(null);

const submitButtonCaption = computed(() => {
  if (mode.value === "login") {
    return "Login";
  } else {
    return "Signup";
  }
});

const switchAuthModeCation = computed(() => {
  if (mode.value === "login") {
    return "Signup instead";
  } else {
    return "Login instead";
  }
});

function switchAuthMode() {
  if (mode.value === "login") {
    mode.value = "signup";
  } else {
    mode.value = "login";
  }
}

// login, signup

let timer;

function autoLogout(timer) {
  auth.didAutoLogout = true;

  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("tokenExpiration");

  clearTimeout(timer);

  auth.token = null;
  auth.userId = null;
}

async function submitForm() {
  formISvalid.value = true;
  if (
    email.value === "" ||
    !email.value.includes("@") ||
    password.value.length < 6
  ) {
    formISvalid.value = false;
  }

  try {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxuTQzkl1qjJ28_fe5g_jo3Sv0Bp2nApI`;
    if (mode.value === "signup") {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxuTQzkl1qjJ28_fe5g_jo3Sv0Bp2nApI`;
    }

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log("not ok");
      throw new Error(responseData.error.message || `failed to fetch`);
    }

    const expiresIn = responseData.expiresIn * 1000;
    // const expiresIn = 5000;
    const expireDate = new Date().getTime() + expiresIn;

    // setup local storage
    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    localStorage.setItem("tokenExpiration", expireDate);

    router.replace("/home");

    timer = setTimeout(() => {
      console.log("logout");
      router.push("/auth");
      autoLogout();
    }, expiresIn);

    auth.token = responseData.idToken;
    auth.userId = responseData.localId;
  } catch (err) {
    error.value =
      err.message || "faild to autheticate try later, check your login data";
  }
}

onUnmounted(() => {
  location.reload();
});
</script>

<template>
  <the-header v-if="isAuthenticated"></the-header>
  <the-home-header btnMode="home-enable" v-else></the-home-header>

  <base-card mode="card">
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>

      <div>
        <label for="password">Passward</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <div v-if="!formISvalid">
        <p>{{ error }}</p>
      </div>
      <div class="btn">
        <base-button mode="green-enable">{{ submitButtonCaption }}</base-button>
        <base-button
          mode="green-enable"
          type="button"
          @click="switchAuthMode"
          >{{ switchAuthModeCation }}</base-button
        >
      </div>
    </form>
  </base-card>
</template>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.15rem;
  font: inherit;
  border: 1px solid #ccc;
}

input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.btn {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  margin-top: 1.5rem;
}
</style>

import { watch, computed, ref } from "vue";

// auth

export const isAuth = ref(false);

const authValue = computed(() => {
  return isAuth.value;
});

export const setIsAuth = (localId) => {
  isAuth.value = !!localId;
};

watch(authValue, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

//  for real ref for now
const token = localStorage.getItem("token");

export const userToken = ref(token);

console.log(userToken.value);

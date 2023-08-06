import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";

import TheHomeHeader from "./components/layout/TheHomeHeader.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";

const app = createApp(App);

app.use(router);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("the-header", TheHeader);
app.component("the-home-header", TheHomeHeader);

app.mount("#app");

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/main.css";
import router from "@/router";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");

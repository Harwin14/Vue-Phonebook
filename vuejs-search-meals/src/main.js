import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";
import * as filters from "./filters";

// createApp(App)
// .use(router)
// .use(store)
// .mount("#app");

const app = createApp(App);
app.use(router).use(store).mount("#app");

app.config.globalProperties.$filters = filters;

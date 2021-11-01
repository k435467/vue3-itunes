import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";
// @ts-expect-error: implicit any - js file provided by element-plus
import installElementPlus from "./plugins/element";

const app = createApp(App);
installElementPlus(app);
app.use(store, key).use(router).mount("#app");

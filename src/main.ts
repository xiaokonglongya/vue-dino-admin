import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { setupNaive } from "@/plugins/index";
import router from "@/router/index";
async function setup() {
  const app = createApp(App);
  setupNaive(app);
  app.use(router);
  app.mount("#app");
}
setup();

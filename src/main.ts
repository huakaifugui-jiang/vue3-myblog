/*
 * @Author: wlj
 * @Date: 2022-05-24 09:18:01
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-10 15:43:24
 * @Description: 
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import myDirectives from './directives';

const app = createApp(App)
myDirectives(app)

app.use(store).use(router).mount("#app");

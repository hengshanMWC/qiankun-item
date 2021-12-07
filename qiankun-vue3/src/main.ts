import "./public-path";
import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { loadMicroApp } from "qiankun";

interface IRenderProps {
  container: Element | string;
}
let instance: Vue.App<Element>;
function render(props: IRenderProps) {
  const { container } = props;
  instance = createApp(App);
  instance
    .use(router)
    .mount(
      container instanceof Element
        ? (container.querySelector("#app") as Element)
        : (container as string)
    );
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({ container: "#app" });
}
export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props: IRenderProps) {
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount() {
  instance.unmount();
}
// loadMicroApp({
//   name: "qiankun-vue3",
//   entry: "//localhost:8001",
//   container: "#app",
// });

import "./public-path"; // 暴露public-path文件
import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "qiankun"; // 拿window的声明文件

let instance: Vue.App<Element>;
function render(props: QiankunRenderProps) {
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
// 作为单独应用使用
if (!window.__POWERED_BY_QIANKUN__) {
  render({ container: "#app" });
}
// 子应用初始化会调用一次
export async function bootstrap() {
  console.log("[vue3] vue3 app bootstraped");
}
// 进入子应用
export async function mount(props: QiankunRenderProps) {
  console.log("[vue3] vue3 from main framework", props);
  render(props);
}
// 卸载子应用
export async function unmount() {
  instance.unmount();
}

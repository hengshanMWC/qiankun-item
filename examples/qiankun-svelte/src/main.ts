import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App.svelte";

let app: App;
function render(props: QiankunRenderProps) {
  const { container } = props;
  app = new App({
    target:
      container instanceof Element
        ? (container.querySelector("#app") as Element)
        : document.getElementById("app"),
  });
}

renderWithQiankun({
  // 子应用初始化会调用一次
  bootstrap() {
    console.log("[svelte] svelte app bootstraped");
  },
  // 进入子应用
  mount(props: QiankunRenderProps) {
    console.log("[svelte] svelte from main framework", props);
    render(props);
  },
  // 卸载子应用
  unmount() {
    app.$destroy();
  },
});

// 作为单独应用使用
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

export default app;

// 是否作为子应用运行
export default function changePublicPath() {
  if (window.__POWERED_BY_QIANKUN__) {
    // 动态配置路径
    __webpack_public_path__ =
      window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ as string;
  }
}

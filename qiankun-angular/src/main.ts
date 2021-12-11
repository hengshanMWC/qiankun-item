import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'qiankun';
import changePublicPath from './public-path'; // 暴露public-path文件

changePublicPath();
if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule>;
async function render() {
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props: QiankunRenderProps) {
  console.log('[angular] angular app bootstraped', props);
}

export async function mount(props: QiankunRenderProps) {
  console.log('[angular] props from main framework', props);
  render();
}

export async function unmount(props: QiankunRenderProps) {
  console.log('[angular] angular app unmount', props);
  // @ts-ignore
  app.destroy();
}

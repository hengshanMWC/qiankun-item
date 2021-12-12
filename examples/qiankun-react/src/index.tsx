import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import changePublicPath from "./public-path"; // 暴露public-path文件
import "qiankun"; // 拿window的声明文件

changePublicPath()
function render(props: QiankunRenderProps) {
  const { container } = props;
  ReactDOM.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>, 
  container instanceof Element ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props: QiankunRenderProps) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props: QiankunRenderProps) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
  container instanceof Element 
    ? (container.querySelector('#root') as Element)
    : (document.querySelector('#root') as Element));
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

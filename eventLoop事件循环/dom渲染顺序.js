/**
 * 1. 可以拷贝到浏览器控制台执行
 * 2. window.alert()会阻塞js主进程执行，更能体现js主进程和GUI渲染进程的切换
 */
const box = document.querySelector("body");
box.style.backgroundColor = "black";
new Promise((resolve) => {
  resolve();
}).then((res) => {
  window.alert("微任务");
});
console.log("同步任务");
setTimeout(() => {
  window.alert("宏任务");
  box.style.backgroundColor = "blue";
}, 0);

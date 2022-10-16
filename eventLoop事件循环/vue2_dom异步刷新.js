/**
 * vue2底层模型驱动视图（对dom的修改）是放到nextTick()去执行的，即  nextTick(flushSchedulerQueue); 这里简单用defineProperty模拟
 *
 */
const object1 = {};
Object.defineProperty(object1, 'property1', {
  set: function(value) {
    alert('defineProperty setter')
    document.querySelector('body').style.backgroundColor = "black";
  }
});
object1.property1 = 72;
new Promise(resolve => {
  resolve()
}).then(res => {

   // 即便真实dom还没有被GUI渲染(body背景色黑色未生效)，也可以通过虚拟dom（内存里面的）获取真实dom的数据(body背景色为黑色)
   alert(document.querySelector('body').style.backgroundColor)
   alert('微任务')
})
object1.property1 = 77;
setTimeout(() => {
   alert('宏任务')
})

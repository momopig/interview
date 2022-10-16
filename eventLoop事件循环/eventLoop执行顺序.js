
async function async1() {
	console.log('async1 start'); // 同步代码2
	await async2();
	console.log('asnyc1 end'); // 微任务1
}
async function async2() {
	console.log('async2');  // 同步代码3
}
console.log('script start'); // 同步代码1
setTimeout(() => { // 宏任务1（完）
	console.log('setTimeOut');
}, 0);
async1();
new Promise(function (reslove) {
	console.log('promise1'); // 同步代码4
	reslove();
}).then(function () {
	console.log('promise2'); // 微任务2（完）
})
console.log('script end'); // 同步代码5（完）

// script start
// async1 start
// async2
// promise1
// script end
// asnyc1 end
// promise2
// setTimeOut


script start
VM2638:2 async1 start
VM2638:7 async2
VM2638:15 promise1
VM2638:20 script end
VM2638:4 asnyc1 end
VM2638:18 promise2
VM2638:11 setTimeOut



// 4. 用 Function.prototype.apply 实现 Function.bind()
Function.prototype.bind = function(context) {
    let newArguments = Array.prototype.slice.call(arguments, 1)
	return () => {
    	this.apply(context, newArguments)
    }
}
Function.prototype.bind = function(context) {
return () => {
    this.apply(context, [...arguments].slice(1))
  }
}

// let obj = {a:1}
// let test = function(value) {
//   console.log(obj.a)
//   console.log(value)
// }
// let newFn = test.bind(obj, 2)
// newFn() // 1, 2

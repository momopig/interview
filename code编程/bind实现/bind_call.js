Function.prototype.bind = function() {
  return () => {
    this.call(...arguments)
  }
}

let obj = {a:1}
let test = function(value) {
  console.log(obj.a)
  console.log(value)
}
let newFn = test.bind(obj, 2)
newFn() // 1, 2

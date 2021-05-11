Function.prototype.bind = function() {
  return () => {
    this.call(...arguments)
  }
}
const obj = {
  name: 'Jack'
}
function test() {
  console.log(this.name)
}
test.bind(obj)()

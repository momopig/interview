var i = 0
let callbacks = []
while(i < 5) {
  callbacks.push(function() {
    return i
  })
  i++
}
console.log(callbacks.map(callback => callback())) // [5, 5, 5, 5, 5]

callbacks = []
let j = 0
while(j < 5) {
  callbacks.push(function() {
    return j
  })
  j++
}
console.log(callbacks.map(callback => callback())) // [5, 5, 5, 5, 5]

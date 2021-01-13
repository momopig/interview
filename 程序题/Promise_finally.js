// Promise.prototype.finally = function(callback) {
//   let  P = this.constructor;
//   return this.then(
//     () => callback(),
//     () => callback()
//   )
// }
let p1 = new Promise((resolve, reject) => {
  resolve('resolve')
 })
 let p2 = new Promise((resolve, reject) => {
  resolve('reject')
 }).catch(error => {
   console.log(error)
   return error
 }).finally(value => {
   console.log(`finally`)
 })
//  p1.then(value => {
//   console.log(value)
//   return 'then1'
//  }).then(value => {
//    console.log(value)
//  })
// p1.finally((value) => console.log(`finally: ${value}`))


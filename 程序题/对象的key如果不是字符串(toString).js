var a = {}
var b = '123'
var c =123
a[b] = 'b'
a[c] = 'c'
console.log(a[b]) // c

var a = {}
var b = Symbol('123')
var c = Symbol('123')
a[b] = 'b'
a[c] = 'c'
console.log(a[b]) // b

var a = {}
var b = {key: '123'} // b.toString()等于[object Object]
var c = {key: 123}
a[b] = 'b'
a[c] = 'c'
console.log(a[b]) // c


class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }



//a.js
console.log("before import b")
import {b} from "./b.mjs"
console.log("b is " + b)
export let a = b+1;

//b.js
console.log("before import a")
import {a} from "./a.mjs"
console.log("a is " + a)
export let b = a+1;

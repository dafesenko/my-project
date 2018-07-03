require('modules');

// debugger;
import { one as arr } from './modules/helpers'
const message = text => `text is ${text}`;

const newText = message(arr[1]);

console.log(newText);
// console.log( one );
// console.log(` one = ${0 + 1}`);
// console.log(` two = ${1 + 1}`);

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
  }
  
  add1(10).then(v => {
    console.log(v);  // prints 60 after 4 seconds.
  });
  
  async function add2(x) {
    const a = resolveAfter2Seconds(20);
    const b = resolveAfter2Seconds(30);
    return x + await a + await b;
  }
  
  add2(10).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
  });
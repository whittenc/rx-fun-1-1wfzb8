import { Observable } from 'rxjs'; 

console.clear();

// Look at the similarities of the two constructors
const p = new Promise((resolve, reject) => {
  resolve("THIS IS A PROMISE");
});

const o = new Observable((observer) => {
  observer.next("THIS IS AN OBSERVABLE");
});

const p2 = p.then((res) => {
  //Success
}, (err) => {
  //Error
});

const subscription = o.subscribe((res) => {
  // Success  
}, (err) => {
  // Error
}, () => {
  // Complete
});

// ------------------------------------------------------------
// PRIMITÍV ADATTÍPUSOK
// ------------------------------------------------------------

console.log("--- numerikus ---")
let age = 58;

console.log(age);

console.log(typeof age);

let avgWeigt = 74.5;

console.log(avgWeigt);

console.log(typeof avgWeigt);

console.log("--- string ---"); // szöveg
let fullName = "Kiss János";

console.log(fullName);

console.log(typeof fullName);

let postalCode = "23A5C";

console.log(postalCode);

console.log(typeof postalCode);

console.log("--- undefined ---"); 
let x;

console.log(x); // undefined

console.log(typeof x);

console.log("--- null ---"); 
let emptyObject = null;

console.log(emptyObject);

console.log(typeof emptyObject); // null típusa object!!

console.log("--- boolean ---");
let isActive = true;
isActive = false;

console.log(isActive);

console.log(typeof isActive);

// ----------------------- 
// kevésbé releváns, ritkán találkozunk velük

console.log("--- symbol ---"); //unique, egyedi értéket tudok megadni vele
const sim1 = Symbol("id");
const sim2 = Symbol("id");

console.log("symbols are equal", sim1 === sim2);

console.log(typeof sim1);

console.log("--- BigInt ---");
let numberOfGalaxis = 532651323163271632n;
console.log(numberOfGalaxis);
console.log(typeof numberOfGalaxis);


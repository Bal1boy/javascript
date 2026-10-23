// ------------------------------------------------------------
// VÁLTOZÓK
// ------------------------------------------------------------

// let - értéke módosítható
let age; // deklarálás - változó létrehozás

console.log(age);

age = 25; // értékadás

console.log(age);

let myAge = 32; // inícializálás (változó létrehozás és értékadás egy lépésben)

console.log(myAge);

// const - értéke nem módosítható
// const country; // SyntaxError: Missing initializer in const declaration

const country = "Hungary";

console.log(country);

// country = "Germany"; // TypeError: Assignment to constant variable 

// var - régi megközelítés (ne használjuk!!)
var city = "Budapest";

console.log(city);

/*
  változók elnevezési konvenciói:

  • nem keződhet számmal és speciális karakterrel (kivéve: $ és _)
  • nem lehet benne szóköz vagy kötőjel
  • kifejezőnek kell lennie
  • egyedinek kell lennie
  • ha több szóból áll, nagybetűvel jelöljük a szavak kezdetét (camelCase módszer)
  • nem lehet ún. "lefoglalt szó" (var, let, const, NaN stb.)
*/

// jó változónevek:

let userName = "Anna";
console.log(userName);

const WEB_URL = "https://www.google.com"; // konstansok esetén időnként UPPER_SNAKE_CASE is használható
console.log(WEB_URL);

// kerülendő példák:

// let x = "Anna";  // rossz, mert nem kifejező a név
// let a = 10; // rossz, mert nem kifejező a név
// let 2sheep = 2; // rossz, mert számmal kezdődik
// let one moment = 1; // rossz, mert szóköz van benne

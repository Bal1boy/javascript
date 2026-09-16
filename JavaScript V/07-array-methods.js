// Array - tömb
// a gyűjteményes adatszerkezetekhez tartoznak

// heterogén tömbök
const heterogenArray = [12, true, "k", "szöveg", ["alma", "körte", "barack"]];

console.log(heterogenArray[0]); // index alapú elérés

console.log(heterogenArray[2]);

console.log(heterogenArray.length); // tömb hossza

console.log(heterogenArray[100]); // undefined (túlindexelés)

console.log(heterogenArray[heterogenArray.length - 1][1]);

// homogén tömbök
const array = [2, 5, 1, 9, 3];

array[2] = 0; // módosítom a 2. indexű elemet
console.log(array[2]);

// **********************************************************
// a tömbök iterálhatóak, vagyis ciklussal bejárhatók
const days = [
  "hétfő",
  "kedd",
  "szerda",
  "csütörtök",
  "péntek",
  "szombat",
  "vasárnap",
];

// számláló ciklus (a klasszikus index alapú)
for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
}

// for..of ciklus (az érték alapú)
for (let day of days) {
  console.log(day);
}

// while ciklus (a feltétel alapú - elől tesztelős ciklus)
let i = 0;
while (i < days.length) {
  console.log(days[i]);
  i++;
}

// **********************************************************
// tömb metódusok
const fruits = ["alma", "körte", "banán", "cseresznye"];

fruits.push("szilva"); // elem hozzáadása a tömb végéhez (visszatér a tömb új hosszával)
console.log(fruits);

fruits.pop(); // levágja a tömb legutolsó elemét és visszatér vele
console.log(fruits);

fruits.unshift("kiwi"); // elem hozzáadása a tömb elejéhez (visszatér a tömb új hosszával)
console.log(fruits);

fruits.shift(); // levágja a tömb legelső elemét és visszatér vele
console.log(fruits);

console.log(fruits.includes("banán")); // elem keresés (igaz vagy hamis értékkel tér vissza)

console.log(fruits.indexOf("cseresznye")); // index keresés (ha nem tartalmazza a tömb -1-el tér vissza)

const slicedFruits = fruits.slice(0, 2); // tömb szeletelése (visszatér a leszeletelt tömbbel)
console.log(slicedFruits);

// Adatok átstruktúrálása

// Az adatok átsrukturálása egy gyors módszer arra, hogy tömbökből vagy objektumokból változókba menthessük az értékeket
// egy modern technika, ami az ES6-től érhető el

// tömbök átstruktúrálása
// régi módszer (az adatokat egyenként kell kivenni a tömbből és az új változóknak átadni)

const user = ["Kiss", "Pista", 35, "1014", "Budapest", "Ady utca", "15/A"];

const lastName = user[0];
const firstName = user[1];
const age = user[2];
const postalCode = user[3];
const city = user[4];
const street = user[5];
const houseNumber = user[6];

console.log(lastName);
console.log(houseNumber);

// ***************************************************************
// új technika

// const user = ["Kiss", "Pista", 35, "1014", "Budapest", "Ady utca", "15/A"];

// const [lastName, firstName, age, postalCode, city, street, houseNumber] = user;

// console.log(lastName);
// console.log(houseNumber);

// ***************************************************************
// ha csak bizonyos adatokra van szükségünk, akkor nem muszáj az összeset elmenteni egy-egy változóba

// const user = ["Kiss", "Pista", 35, "1014", "Budapest", "Ady utca", "15/A"];

// const [, firstName, age, , , , houseNumber] = user;

// console.log(firstName);
// console.log(age);
// console.log(houseNumber);

// ***************************************************************
// arra is van lehetőségünk, hogy csak néhányat mentsünk ki egy-egy változóba, a maradékot egy új tömbbe

// const user = ["Kiss", "Pista", 35, "1014", "Budapest", "Ady utca", "15/A"];

// const [lastName, firstName, age, ...address] = user; // rest operátor

// console.log(lastName);
// console.log(firstName);
// console.log(age);
// console.log(address);

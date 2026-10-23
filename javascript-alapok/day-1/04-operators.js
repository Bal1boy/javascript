// ------------------------------------------------------------
// MATEMATIKAI ÉS NUMERIKUS OPERÁTOROK
// ------------------------------------------------------------

let num1 = 10;
let num2 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2); // maradékos osztás

// Példa 1: POSZTINKREMENTÁLÁS (num1++)
// A növelés UTÓLAG történik: először felhasználja a régi értéket, majd növeli.
num1 = 0;
console.log("Kezdő érték:", num1);
num1++;
console.log("num1++ után (posztinkrementálás):", num1);

console.log("-----------");

// Példa 2: PREINKREMENTÁLÁS (++num1)
// A növelés ELŐRE történik: először növeli, majd felhasználja az új értéket.
num1 = 0;
console.log("Kezdő érték:", num1);

console.log("++num1 kiírása (preinkrementálás):", ++num1);
// Itt először növeli → 0 → 1, majd kiírja az 1-et

console.log("-----------");

// Példa 3: POSZTINKREMENTÁLÁS kiírással
num1 = 0;
console.log("Kezdő érték:", num1);

console.log("num1++ kiírása (posztinkrementálás):", num1++);
// Itt először kiírja a régi értéket → 0
// Majd UTÁNA növeli → num1 értéke 1 lesz

console.log("num1 értéke a növelés UTÁN:", num1);
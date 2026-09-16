// Objektumok
// a gyűjteményes adatszerkezetekhez tartoznok
// kulcs - érték (key - value) párok formájában tárolja az elemeit
// szokták őket asszociatív tömbnek is nevezni

const user = {}; // üres objektum létrehozása

user.name = "Nagy Attila";
user.age = 43;
user.email = "nagy.a@gmail.com";

console.log(user.name); // kulcs alapú elérés
console.log(user.age);
console.log(user.email);

console.log("----------------------------------");
// az objektumoknak lehetnek tulajdonságai (field, property) és metódusai
const student = {
  // tulajdonságok
  firstName: "János",
  lastName: "Kiss",
  email: "kiss.j@gmail.com",
  isActive: true,
  hobbies: ["futás", "horgászat", "olvasás"],
  favoriteBook: {
    title: "Egri csillagok",
    author: "Gárdonyi Géza",
  },
  address: {
    zipCode: "1012",
    city: "Budapest",
    street: "Fő utca",
    houseNumber: "1/A",
  },
  // metódusok
  getFullName: function () {
    return this.lastName + " " + this.firstName;
    // return `${this.lastName} ${this.firstName}`; // template literal
  },
  sayHello: function () {
    return `Szia, a nevem ${this.firstName}`;
  },
};

console.log(student.firstName); // pont nótáció

console.log(student["lastName"]); // szögletes zárójeles mód - alternatív módszer

// tulajdonság módosítható
console.log(student.isActive);
student.isActive = false;
console.log(student.isActive);

// tulajdonság törölhető
delete student.isActive;
console.log(student);

console.log(student.hobbies[1]); // beágyazott tömb elérés

console.log(student.favoriteBook.title); // beágyazott objektum elérés

console.log(
  `Cím: ${student.address.zipCode} ${student.address.city}, ${student.address.street} ${student.address.houseNumber}`, // template literal
);

console.log(student.getFullName());

console.log(student.sayHello());

console.log("----------------------------------");
// az objektum adatstruktúra iterálható, vagyis ciklussal bejárható
// a for ..in ciklus egy objektum összes tulajdonságán iterál végig
// akkor hasznos, ha egy objektumon az elejétől a végéig szeretnénk végigmenni

const person = {
  name: "Kovács János",
  email: "jani.k@gmail.com",
  age: 30,
  city: "Budapest",
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.table(person);
console.log("----------------------------------");

// for ..in ciklus
for (let key in person) {
  console.log(key + ":" + person[key]); // A szögletes zárójel azért kell, mert a 'key' egy változó, ami stringet tartalmaz
}

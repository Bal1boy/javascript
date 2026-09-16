//1. FELADAT Hozz létre egy user objektumot, amelynek az alábbi propertyjei vannak:
//firstName, lastName, age, email, mobile
//és van egy address propertyje, ami maga is egy objektum, ezekkel a fieldekkel:
//city, ZIP, street, number
const user = {
  firstName: "John",
  lastName: "Conor",
  age: 15,
  email: "john.conor@gmail.com",
  mobile: "+36305552015",
  address: {
    city: "Budapest",
    ZIP: "1015",
    street: "Kossuth utca",
    number: "2/B",
  },
};

//2. FELADAT Miután létrehoztad, írd ki az összes fieldjét a console-ra
console.log(Object.keys(user));

console.log(user);

console.log("---------------------------");
//3. FELADAT Töröld ki a mobile fieldet
delete user.mobile;

console.log(user);

console.log("---------------------------");
//4. FELADAT Majd adj hozzá egy újat
user.hobbies = ["olvasás", "kirándulás", "futás"];

console.log(user);

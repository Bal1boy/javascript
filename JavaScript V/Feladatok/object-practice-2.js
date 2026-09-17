//Objektum literál, melyben egyszerre több összetartozó értéket határozhatunk meg
const users = [
  {
    userName: "Péter",
    age: 19,
  },
  {
    userName: "Kitti",
    age: 30,
  },
  {
    userName: "Anna",
    age: 44,
  },
];

//Végigiterálhatunk rajta egy for...in ciklussal, így kiírjuk az összes propertyt értékkel együtt
for (let index in users) {
  // a for...in ciklus az index változóba minden körben a tömb aktuális sorszámát menti el (0, 1, 2)
  console.log(users[index]); // key-ről átneveztem indexre-re!
}

console.log("---------------------------");
//Két módon is kiírathatjuk a propertyk értékét
// Of -> közvetlenül a user-en érhető el a property
for (let user of users) {
  // a for...of ciklus a user változóba minden körben a tömb aktuális objektumát menti el
  console.log(user.userName); // key-ről átneveztem user-re!
}

console.log("---------------------------");
//In -> a lista key-edik elemén hívható meg a property
for (let index in users) {
  console.log(users[index].userName); // key-ről átneveztem indexre-re!
}
// FONTOS: for...in vs for...of összehasonlítása
// a for...in az indexet adja vissza, a for...of a konkrét objektumot

console.log("---------------------------");
console.log("1. FELADAT");
//1. FELADAT
//Hozz létre egy tömböt, amiben neveket fogsz eltárolni ("nameList")
//Menj végig a users tömbön és az objectumokban tárolt neveket tedd bele a neveket tároló ("nameList") tömbbe
//majd írasd ki a neveket tartalmazó tömb elemeit
let nameList = [];

for (let user of users) {
  //   console.log(key.userName);
  nameList.push(user.userName);
}

console.log(nameList);

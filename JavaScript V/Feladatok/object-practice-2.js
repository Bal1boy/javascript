//Objektum literál, melyben egyszerre több összetartozó értéket határozhatunk meg
const users = [
    {
        userName: 'Péter',
        age: 19
    },
    {
        userName: 'Kitti',
        age: 30
    },
    {
        userName: 'Anna',
        age: 44
    }
];

//Végigiterálhatunk rajta egy for...in ciklussal, így kiírjuk az összes propertyt értékkel együtt
for(let key in users){
    console.log(users[key]);
};

//Két módon is kiírathatjuk a propertyk értékét
//Of -> közvetlenül a key-en érhető el a property
for(let key of users) {
    console.log(key.userName);
;}

//In -> a lista key-edik elemén hívható meg a property
for(let key in users){
    console.log(users[key].userName);
};

//1. FELADAT
//Hozz létre egy tömböt, amiben neveket fogsz eltárolni ("nameList")
//Menj végig a users tömbön és az objectumokban tárolt neveket tedd bele a neveket tároló ("nameList") tömbbe
//majd írasd ki a neveket tartalmazó tömb elemeit

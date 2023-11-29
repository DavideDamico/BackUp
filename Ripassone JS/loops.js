/*** FUNZIONI ****/
console.log('ripassone/loops.js');

// ************** SINTASSI ******************* //

const moreStudents = ["Davide", "Giada", "Delia"];

function sayHi(name){
    console.log("Ciao sono " + name)
}

// CICLO FOR

for(let i = 0; i < moreStudents.length; i = i + 1){
    sayHi(moreStudents[i])
}

// potete eseguire la funzione
// ma non sapete quanti elementi ci sono
// potete chiederlo tramite una famosa proprietà dell'array
// con delle condizioni dovete eseguire la funzione 
// finchè non si arriva alla fine dell'array
/*
let index = 0;
if(index < moreStudents.length){ // 0 < 3
    sayHi(moreStudents[index])
}
index = index + 1; // index -> 1
if(index < moreStudents.length){ // 1 < 3
    sayHi(moreStudents[index])
}
index = index + 1; // index -> 2
if(index < moreStudents.length){ // 2 < 3
    sayHi(moreStudents[index])
}
index = index + 1; // index -> 3
if(index < moreStudents.length){ // 3 < 3
    sayHi(moreStudents[index])
}

*/

// E SE ABBIAMO UN'ARRAY DI OGGETTI??

const studentsObjects = [
    { id: 1, name: "Riccardo", age: 37 },
    { id: 2, name: "Giada", age: 23 },
    { id: 3, name: "Carmela", age: 24 },
    { id: 4, name: "Qualcuno", age: 14 },
]

// fai console log solo di chi ha almeno 23 anni
for(let i = 0; i < studentsObjects.length; i++){
    const elementAtIndex = studentsObjects[i];
    if(elementAtIndex.age >= 23){
        console.log(elementAtIndex.name)
    } else {
        console.log("e io pago")
    }
}

// METTIAMOCI DENTRO ANCHE LE FUNZIONI

const teacherObjects = [
    { id: 1, name: "Ermenegilda", age: 37 },
    { id: 2, name: "Aristogatto", age: 23 },
    { id: 3, name: "Billy", age: 24 },
    { id: 4, name: "Batman", age: 14 },
    { id: 5, name: "Jay", age: 23 },
]

function isNameLongerThen(name, maxCharAmount){
    return name.length >= maxCharAmount;
}

// logghiamo solo i nomi più lunghi di 4 caratteri
for (let i = 0; i < teacherObjects.length; i++){
    
    console.log("i -> ", i);

    const elementAtIndex = teacherObjects[i]; //  { id: 1, name: "Ermenegilda", age: 37 },

    const shouldLog = isNameLongerThen(elementAtIndex.name, 4)

    if(shouldLog){
        console.log(elementAtIndex.name +" è più lungo di 4 caratteri")
    }
}
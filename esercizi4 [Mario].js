let array = [1,2,3,45,6,77,8,9,10];
let array2 = [];

for(let i=0; i<array.length; i++){
    array2[i] = array[i] * 5;
    console.log(array2[i]);
}

let arrayMap = array.map(elem => elem * 5);
console.log(arrayMap);


let arrayFilter = array.filter(elem => elem >= 2 && elem <= 5);
console.log(arrayFilter);

let arrayReduce = array.reduce((prec,current) => prec + current, 0)
console.log(arrayReduce)

let arrayFilter2 = array.find(elem => elem >= 18); // valore = 45 (primo elemento dell'array [45,77]

console.log(arrayFilter2[0]);

let elem = array[0];
console.log(array.find(function(elem){return elem >= 18}));

console.log("for-each");
array.forEach(elem => console.log(elem));
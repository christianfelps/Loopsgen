const leia = require('readline-sync')
let vetorString = [
    "boxer",
    "Pastor alemao",
    "pinscher",
    "Husky Siberiano",
    "Corgi"
];
for (let index = 0; index < vetorString.length; index++) {
    console.log(index + 1, vetorString[index]);
    
}
console.log('1 elemento da lista: ', vetorString[0])
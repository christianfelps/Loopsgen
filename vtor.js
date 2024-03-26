const leia = require('readline-sync')
let vetorInteiros = new Array(5);
for (let index = 0; index < 5; index++) {
 vetorInteiros[index] = leia.questionInt(`Digite um numero ${index + 1}: `); 
}
console.log('\nOs numeros digitados foram\n');
for ( index = 0; index < 5; index++) {
    console.log(`${index + 1},o numero: ${vetorInteiros[index]}`);
    
}
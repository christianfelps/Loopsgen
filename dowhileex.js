const leia = require('readline-sync')

let num,soma = 0;

do{
num = leia.questionInt('Digite um numero ')
if(num > 0 )
soma += num 
}while(num !== 0)
console.log(`A soma dos numeros positivos é: ${soma}`)

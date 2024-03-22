const leia = require('readline-sync')

let x,term;
x = leia.questionInt('Digite o primeiro numero do intervalo: ')
term = leia.questionInt('Digite o ultimo numero do intervalo: ')

if(term < x){
    console.log('Intervalo Invalido')
}
console.log(`no Intervalo entre ${x} e ${term}`)
for( x; x <= term; x++){
    
    if(x % 3 === 0 && x % 5 === 0)
    console.log(`${x} é múltiplo de 3 e 5`)

}

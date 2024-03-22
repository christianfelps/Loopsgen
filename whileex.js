const leia = require('readline-sync')


let idade = 0, jovens = 0, senhores = 0; 

idade = leia.questionInt('Digite uma idade: ')
while(idade > 0){
if(idade < 21 && idade >=0){
    jovens++
    
}
if(idade > 50) {
    senhores++
}
idade = leia.questionInt('Digite uma idade: ')

    // while(resp === 'S'){
    //     resp = leia.question('Quer continuar? [S/N] ')

    // }
}
console.log('O total de pessoas com menos de 21 anos: ', jovens);
console.log('O total de pessoas com mais de 50 anos: ', senhores);


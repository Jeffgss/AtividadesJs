/*
Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.
*/
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Me diz um numero ae malandro? ', (resp) => {
    let num = Number(resp);
    for (let i = 1; i < 11; i++) {
        let multi = num * i;
        console.log(`${num} x ${i} = ${multi}`);
    }
});


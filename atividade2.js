/*
Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.
*/

let num = window.prompt('Escolha um número para ver a tabuada');

for (let i = 1; i < 10; i++) {
    let multi = num * i;
    console.log(`${num} x ${i} = ${multi}`);
}
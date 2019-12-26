/** 
Faça um programa que leia 2 números, some - os e exiba uma mensagem com o resultado comparando se os valores são maiores, menores ou iguais a 100.
*/

let n1 = parseInt(prompt('Digite um número: '));
let n2 = parseInt(prompt('Digite outro número: '));

let sum = (n1 + n2);
console.log(sum);

if (sum > 100) {
    console.log(`O valor ${sum} é maior do que 100`);
}
if (sum < 100) {
    console.log(`O valor ${sum} é menor do que 100`);
}

if (sum === 100) {
    console.log(`O valor ${sum} é igual a 100`);
}
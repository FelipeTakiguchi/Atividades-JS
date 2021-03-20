nome1 = prompt("nome: ");
peso1 = prompt("peso: ");
altura1 = prompt("altura: ");
nome2 = prompt("nome: ");
peso2 = prompt("peso: ");
altura2 = prompt("altura: ");

const imc1 = peso1 / (altura1 * altura1);
const imc2 = peso2 / (altura2 * altura2);

if(imc1 > imc2){
    console.log(`O IMC de ${nome1} (${imc1}) é maior que o de ${nome2} (${imc2})`);
} else{
    console.log(`O IMC de ${nome2} (${imc2}) é maior que o de ${nome1} (${imc1})`);
}
function calcularIdade(anoNascimento) {
    return 2021 - anoNascimento;
}
   
const nome = prompt("Nome: ");
const anoNasc = prompt("Ano de Nascimento: ");
let idade = calcularIdade(anoNasc);

if(idade >= 65){
    console.log("Você já está aposentado(a)!");
} else{
    let tempoRestante = 65 - idade;
    console.log(`Restam ${tempoRestante} anos para a sua aposentadoria!`); 
}
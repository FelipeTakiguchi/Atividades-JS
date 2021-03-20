numero = prompt("Informe um número: ");
let palavras = [];
let palavra = "";

for (let i = 0; i < numero; i++) {
    palavra = prompt("Digite uma palavra: ");
    palavras[i] = palavra;
}

for (let i = numero-1; i >= 0; i--) {
    console.log(palavras[i]);
}
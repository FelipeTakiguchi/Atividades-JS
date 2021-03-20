const nome1 = prompt("Informe o nome do primeiro restaurante: ");
const nome2 = prompt("Informe o nome do segundo restaurante: ");
const nome3 = prompt("Informe o nome do terceiro restaurante: ");

const valor1 = parseInt(prompt("Informe o valor total do primeiro restaurante: "));
const valor2 = parseInt(prompt("Informe o valor total do segundo restaurante: "));
const valor3 = parseInt(prompt("Informe o valor total do terceiro restaurante: "));

const gorjeta = (valorTotal) => {
    if(valorTotal < 50){
        return valorTotal * 0.2;
    }else if(valorTotal >= 50 && valorTotal <= 200){
        return valorTotal * 0.15;
    }
    else if(valorTotal > 200){
        return valorTotal * 0.1;
    }else{
        //valores invalidos
    }
}

const gorjeta1 = gorjeta(valor1);
const gorjeta2 = gorjeta(valor2);
const gorjeta3 = gorjeta(valor3);

let restaurantes = [nome1, nome2, nome3];
let gorjetas = [gorjeta1, gorjeta2, gorjeta3];
let valores = [valor1, valor2, valor3];

const detalhamento = (nomesRestaurantes, valoresGorjetas, valoresOriginais) => {
    for (let i = 0; i < 3; i++) {
        impressao(nomesRestaurantes[i], valoresGorjetas[i], valoresOriginais[i])
    }
}

const impressao = (nomeRestaurante, valorGorjeta, valorOriginal) => {
    let total = parseInt(valorOriginal) + parseInt(valorGorjeta);
    console.log("Restaurante do " + nomeRestaurante + " - [Valor: R$ " + valorOriginal.toFixed(2) + " | Gorjeta: R$ " + valorGorjeta.toFixed(2) + " | Total: R$ " + total.toFixed(2) + "]");
}

detalhamento(restaurantes, gorjetas, valores);
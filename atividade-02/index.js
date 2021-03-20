nome = prompt("nome: ");
altura = prompt("altura: ");
peso = prompt("peso: ");

const imc = peso / (altura * altura);

if(imc < 17){
    console.log("Muito abaixo do peso!")
}else if(imc >=17 && imc < 18.5){
    console.log("Abaixo do peso!")
}else if(imc >=18.5 && imc < 25){
    console.log("Peso normal!")
}else if(imc >=25 && imc < 30){
    console.log("Acima do peso!")
}else if(imc >=30 && imc < 35){
    console.log("Obesidade I!")
}else if(imc >=35 && imc < 40){
    console.log("Obesidade II (Sevéra)!")
}else if(imc >=40){
    console.log("Obesidade III (Mórbida)!")
}
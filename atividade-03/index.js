login = prompt("Login: ");
senha = prompt("Senha: ");

if(login == "aluno" && senha == "123" || login == "professor" && senha == "456"){
    alert("Sucesso ao efetuar login!");
} else{
    alert("Falha ao efetuar login!");
}
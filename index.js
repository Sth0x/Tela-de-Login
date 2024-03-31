function logar (){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var dados = {
        email: email,
        senha: senha
    };

    var logJson = JSON.stringify(dados);
    console.log(logJson);
}


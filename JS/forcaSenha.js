//Função para verificar a força da senha

function senhaForca() {
    var password = document.getElementById('senha').value;
    var forca = 0; //será usada para medir a força da senha. Começa com zero e cresce de acordo com as condições dos ifs



    //Condições para medir a força da senha
    if (password.length === 0){
        forca = 0;
    }

    if ((password.length >= 1) && (password.length <= 7)) {

        forca += 10;
    } else if (password.length > 7) {
        forca += 20;
    }

    //verificando caracteres especiais

    //neste if ele verifica se tem letras maiúsculas
    if ((password.length >= 5) && (password.match(/[A-Z]+/))) {

        forca += 25;
    }


    // Verifica os caracteres especiais
    if ((password.length >= 8) && (password.match(/[@$%*]/))) {

        forca += 30;
    }


    mostrarForca(forca);

}

//Função para mostrar a força da senha

function mostrarForca(forca) {
    const corSenha =  document.getElementById("corSenha");
    const corSenhaMedia = document.getElementById("corSenhaMedia");
    const corSenhaForte = document.getElementById("corSenhaForte");

    if (forca === 0){
        corSenha.innerHTML = "";
    } else if (forca <= 30) {
        corSenhaMedia.innerHTML = "";
        corSenhaForte.innerHTML = "";
        corSenha.innerHTML = "<span style='color: red;'>Fraca</span>"; // mostra a senha fraca
    } else if ((forca >= 30) && (forca < 50)) {
        corSenha.innerHTML = "";
        corSenhaForte.innerHTML = "";
        corSenhaMedia.innerHTML = "<span style='color: green;'>Média</span>"; // mostra a senha média
    } else if (forca >= 50) {
        corSenha.innerHTML = "";
        corSenhaMedia.innerHTML = "";
        corSenhaForte.innerHTML = "<span style='color: purpel;'>Forte</span>" // mostra a senha forte
    } 

}
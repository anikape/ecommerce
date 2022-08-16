//importando elementos
const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cep = document.getElementById('cep');
const endereco = document.getElementById('endereco');
const numero = document.getElementById('numero');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');


//checagem dos inputs vazios

form.addEventListener('submit', checkInputs());

function checkInputs(){

    const formulario = [
        nomeValido = nome.value.trim(),
        emailValido = email.value.trim(),
        cepValido = cep.value.trim(),
        enderecoValido = endereco.value.trim(),     
        numeroValido = numero.value.trim(),
        bairroValido = bairro.value.trim(),
        cidadeValida = cidade.value.trim(),
        estadoValido = estado.value.trim(),
        senhaValida  = senha.value.trim(),
        senhaConfirmada = confirmarSenha.value.trim()
    ]

    for(let campo of formulario){
        if(!campo) {
            //caso o campo esteja vazio, mostrar mensagem de erro
            let formControl = document.getElementsByClassName('input-group');
            const small = formControl.querySelector('small');
            small.innerText = "Campo obrigatório!";
            //atribuir classe error
            formControl.classList.add('error');            
        }else{
            return;
        }
    }

    //verificar se senhas são iguais
}

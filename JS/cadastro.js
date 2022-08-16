//criando formData para receber valores dos inputs
const formData = new FormData(document.querySelector('form'));

//importando elementos
const form = document.getElementById('form');
const nome = formData.get('nome');
const email = formData.get('email');
const cep = formData.get('cep');
const endereco = formData.get('endereco');
const numero = formData.get('numero');
const bairro = formData.get('bairro');
const cidade = formData.get('cidade');
const estado = formData.get('estado');
const senha = formData.get('senha');
const confirmarSenha = formData.get('confirmarSenha');
const errorMessage = document.getElementsByClassName('error-message');
const formControl = document.getElementsByClassName('input-group');

//checagem dos inputs vazios
function checkInputs(){

    const formulario = [
        nome, 
        email,
        cep,
        endereco,
        numero, 
        bairro,
        cidade,
        estado,
        senha,
        confirmarSenha
    ]

    

    for(let campo of formulario){
        if(!campo.trim()) {
            //caso o campo esteja vazio, mostrar mensagem de erro  
            const message = "Campo obrigatório!"         
            errorMessage.inerText = message;
            //atribuir classe error
            formControl.classList.add('error');            
        }else{
            return;
        }
    }

    //verificar se senhas são iguais
    if (senha !== confirmarSenha){
        const message = "Senhas devem ser iguais!"
        errorMessage.inerText = message;
        formControl.classList.add('error');
    } else{
        formControl.classList.add('success');
    }
}


form.addEventListener('submit', checkInputs());

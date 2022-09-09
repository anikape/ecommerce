// Recebendo campos required do formulário
const formulario = document.getElementById('form');
const fields = formulario.querySelectorAll("[required]");


function customValidation(event) {
    //recebe o elemento que disparou o evento de erro 
    const field = event.target
    //chama a função enviando o elemento por parâmetro
    const validation = ValidateField(field)

    validation()

}

//Percorrendo array de campos 
for (let field of fields) {
    field.addEventListener("invalid", event => {
        // eliminar a mensagem padrão do navegador
        event.preventDefault()
        customValidation(event)

    })
    field.addEventListener("blur", customValidation)

}


function ValidateField(field) {
    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for (let error in field.validity) {
            // se não for customError
            // então verifica se tem erro 
            if (field.validity[error] && !field.validity.valid) {
                foundError = error;
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        //atribuindo mensagens diferentes para cada tipo de erro
        const messages = {
            text: {
                valueMissing: "Este campo não pode estar vazio!"
            },
            email: {
                valueMissing: "Este campo não pode estar vazio!",
                typeMismatch: "Insira um email válido!"
            },
            number: {
                valueMissing: "Este campo não pode estar vazio!",
                badInput: "Utilize apenas números!"
            },
            password: {
                valueMissing: "Este campo não pode estar vazio!"
            }
        }
        //retornando o tipo do campo e a mensagem do tipo de erro
        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        //recebendo o nó pai do campo que apresentou erro
        const formControl = field.parentNode;
        //selecionando a mensagem de erro dentro do nó
        const errorMessage = formControl.querySelector('small.error-message');


        if (message) {
            //se tem mensagem de erro, adiciona classe erro na div
            formControl.classList.add("error")
            //mensagem de erro recebe mensagem passada por parâmetro
            errorMessage.innerHTML = message
        } else {
            //quando erro é solucionado classe erro é removida
            formControl.classList.remove("error")
        }

    }

    return function () {

        const error = verifyErrors()

        if (error) {
            const message = customMessage(error)
            setCustomMessage(message)
        } else {
            setCustomMessage()
        }
    }
}

// função que verifica se senhas são iguais
function verifyPassword() {
    //recebendo elementos
    const password = document.getElementsByName("senha")[0];
    const passwordTwo = document.getElementsByName("confirmarSenha")[0];
    const messageClass = document.getElementById('senha2');
    const errorMessage = messageClass.querySelector('small.error-message');
    let passTrue;

    if (password.value !== "" || passwordTwo.value !== "") {
        passTrue = true;
    } else {
        passTrue = false;
    }

    if(passTrue === false) {
        messageClass.classList.remove("error");
    } else if ((passTrue === true) || (password.value !== passwordTwo.value)) {
        //atribui classe e mensagem de erro caso senhas diferentes     
        messageClass.classList.add("error");
        errorMessage.innerHTML = "Senhas diferentes"
    } else if ((passTrue === true) && (password.value === passwordTwo.value)) {
        //atribui classe e mensagem de sucesso caso senhas iguais        
        messageClass.classList.remove("error");       
    } 


}



//Código para não enviar o formulário
//document.querySelector("form")
    //.addEventListener("submit", event => {
        //console.log("enviar o formulário")

        // não vai enviar o formulário
        //event.preventDefault()
    //})
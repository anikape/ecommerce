let cep = document.querySelector('#cep');

cep.addEventListener ('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
})

function popularForm(resposta) {
    if ("erro" in resposta) {
        alert('CEP não encontrado');
        return;
    }
}
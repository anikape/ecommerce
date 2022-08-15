let cep = document.querySelector('#cep');
let rua = document.querySelector('#endereco');
let bairro = document.querySelector('#endereco');
let cidade = document.querySelector('#endereco');
let estado = document.querySelector('#endereco');

cep.value = '01001000';

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=callback=popularform';
    document.body.appendChild(script);
    // +cep+ concatenei a busca de cep no link da API via cep
});

function popularform(resposta) {

    if ("erro" in resposta) {
        alert('CEP não encontrado')
        return;
    }

    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;

}
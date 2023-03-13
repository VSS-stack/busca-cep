const botao = document.getElementById('botao');
const formRua = document.getElementById('rua');
const formCidade = document.getElementById('cidade');
const formEstado = document.getElementById('estado');

botao.addEventListener('click', (event) => {
    event.preventDefault();

    var rua = formRua.value;
    var cidade = formCidade.value;
    var estado = formEstado.value;

    formRua.value = '';
    formCidade.value = '';
    formEstado.value = '';

    var buscaCep = fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`)
    .then((r) => {
        console.log(r);
    });
})

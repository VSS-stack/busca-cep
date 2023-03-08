const botao = document.getElementById('botao');
const rua = document.getElementById('rua');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');

botao.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(rua.value);
    console.log(cidade.value);
    console.log(estado.value);
})

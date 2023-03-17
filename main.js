const botao = document.getElementById('botao');
const formRua = document.getElementById('rua');
const formCidade = document.getElementById('cidade');
const formEstado = document.getElementById('estado');
const main = document.getElementById('main');

botao.addEventListener('click', (event) => {
    event.preventDefault();

    var rua = formRua.value;
    var cidade = formCidade.value;
    var estado = formEstado.value;

    formRua.value = '';
    formCidade.value = '';
    formEstado.value = '';

    var buscaCep = fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`)
    .then(response => response.json())
    .then(data => {
        if (data.length === 0) {
            main.innerHTML += `
                <h2>0 Resultados Encontrados</h2>
                <p class="aviso1">Verifique se o endereço foi digitado corretamente</p>
                <p class="aviso2">Atualize a página para uma nova busca</p>
            `;
            main.innerHTML += '<style>form {display: none;}</style>';
        } else {
            main.innerHTML += `<h2>${data.length} Resultados Encontrados</h2>`;
            main.innerHTML += '<p class="aviso2">Atualize a página para uma nova busca</p>';
            main.innerHTML += '<style>form {display: none;}</style>';
        }
        data.forEach((data) => {
            main.innerHTML += `
                <div class="resultados">
                    <p>CEP: ${data.cep}</p>
                    <p>Rua: ${data.logradouro}</p>
                    <p>Complemento: ${data.complemento}</p>
                    <p>Bairro: ${data.bairro}</p>
                    <p>Cidade: ${data.localidade}</p>
                </div>
            `;
        });
    });
})

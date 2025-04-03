// Project: Alura Books

// cria um array vazio para armazenar os livros
let livros = []

// cria um endpoint com a url da API que contém as informações dos livros
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

// faz uma requisição para a API e armazena os dados na variável livros
getBuscarLivrosDaAPI()

// função assíncrona que busca os livros da API
// e aplica o desconto nos preços dos livros
async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI); // faz uma requisição para a API e espera a resposta
    livros = await res.json(); // converte a resposta em JSON e armazena na variável livros
    let livrosComDesconto = aplicarDesconto(livros); // chama a função aplicarDesconto passando o array de livros como parâmetro
    exibirOsLivrosNaTela(livrosComDesconto); // exibe os livros na tela com desconto aplicado
}



   
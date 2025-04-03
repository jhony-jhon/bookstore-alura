// Método forEach

// pegando os elementos do HTML para inserir os livros
const elementoParaInserirLivros = document.getElementById('livros')

// pegando o elemento do HTML que exibe o valor total dos livros disponíveis
const elementoComValorTotal = document.getElementById('valor_total_livros_disponiveis')

// função que exibe os livros na tela
// recebe um array de livros como parâmetro e insere os livros no HTML
function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotal.innerHTML = '' // limpa o HTML antes de inserir o valor total dos livros disponíveis
    elementoParaInserirLivros.innerHTML = '' // limpa o HTML antes de inserir os livros
    // percorre o array de livros e insere os livros no HTML
    // usando o método forEach para iterar sobre cada livro do array
    listaDeLivros.forEach(livro => {
        // let disponibilidade = verificarDisponibilidade(livro); // chama a função verificarDisponibilidade para verificar se o livro está disponível
        
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' // verifica se o livro está disponível usando operador ternário

        // insere o livro no HTML
        // usando template literals para criar o HTML do livro
         elementoParaInserirLivros.innerHTML += `
                <div class="livro">
                    <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
                    <h2 class="livro__titulo">
                        ${livro.titulo}
                    </h2>
                    <p class="livro__descricao">${livro.autor}</p>
                    <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                    <div class="tags">
                        <span class="tag">${livro.categoria}</span>
                    </div>
                </div>`
    })   
 }

//  function verificarDisponibilidade(livro) {
//     if(livro.quantidade > 0) {
//         return 'livro__imagens'
//     } else {
//         return 'livro__imagens indisponivel'
//     }
//  }
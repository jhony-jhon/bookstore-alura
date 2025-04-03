// Método map

// função para aplicar o desconto nos livros
// recebe um array de livros como parâmetro e retorna um novo array com os livros atualizados
function aplicarDesconto(livros) {
    const desconto = 0.3;
    // mapeia o array de livros aplicando o desconto
    // e retorna um novo array com os livros atualizados
    livrosComDesconto = livros.map(livro => {
        return{...livro, preco: livro.preco - (livro.preco * desconto)} // spread operator que copia o objeto livro e adiciona o desconto
    })
    return livrosComDesconto; // retorna o novo array com os livros atualizados
}
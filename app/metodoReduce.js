// Método Reduce

function calcularValorTotalDosLivrosDisponivel(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2); // usa o método reduce para calcular o valor total dos livros disponíveis sendo o primeiro índice o 0 e tendo como valor duas casas decimais

}
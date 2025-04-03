// Método Sort

// pega o botão de ordenar por preço
let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    // ordena os livros por preço (crescente)
    let livrosOrdenado = livros.sort((a, b) => a.preco - b.preco);
    // para ordenar os livros por preço (decrescente) basta inverter a ordem b.preco - a.preco
    exibirOsLivrosNaTela(livrosOrdenado);
}
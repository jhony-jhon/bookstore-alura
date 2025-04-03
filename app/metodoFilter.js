// Método Filter

// pega todos os botões do HTML com a classe 'btn'
// e armazena na variável botoes
const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)); // adiciona um evento de clique em cada botão

// função que filtra os livros com base na categoria selecionada
function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id); // pega o elemento do botão clicado
    const categoria = elementoBtn.value; // pega o valor do botão clicado
    
    // filtra os livros com base na categoria selecionada e verifica a disponibilidade usando operador ternário
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria); 
    exibirOsLivrosNaTela(livrosFiltrados); // exibe os livros filtrados na tela
    
    // se a categoria for 'disponivel', calcula o valor total dos livros disponíveis
    // e exibe o valor total na tela
    if(categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDosLivrosDisponivel(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveis(valorTotal); // exibe o valor total dos livros disponíveis na tela
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
    elementoComValorTotal.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>   
    `
}
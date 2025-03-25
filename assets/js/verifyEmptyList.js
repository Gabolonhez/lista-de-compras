const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");
const mensagemCompradosVazia = document.getElementById("mensagem-comprados-vazia");

export function verificarListaVazia(lista) {
    if (lista.querySelectorAll("li").length === 0) {
        mensagemListaVazia.style.display = "block";
        mensagemCompradosVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
        mensagemCompradosVazia.style.display = "none";
    }
}
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigoIncluir = document.querySelector('input').value;
    console.log(amigoIncluir);
    if (amigoIncluir == ""){
        alert('Por favor, insira um nome.');

    }
    else{
        amigos = amigoIncluir;
    }
}


//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigoIncluir = document.querySelector('input').value;
    if (amigoIncluir == ''){
        alert('Por favor, insira um nome.');
        amigoIncluir = '';
    }
    else{
        amigos.push(amigoIncluir);
        console.log(amigos);
        exibirAmigos('p', 'Nomes: ' + amigos);
        limparCampo();
    }
}

function sortearAmigo() {
    if (amigos == ''){
        alert('Por favor, insira um nome para ser sorteado.');
    }
    else {
    let quantidadeAmigos = amigos.length;
    let amigoSorteado = parseInt(Math.random() * quantidadeAmigos);
    console.log(amigoSorteado);
    console.log(amigos[amigoSorteado]);
    exibirTextoSorteado('p', 'O nome do amigo sorteado é: ' + amigos[amigoSorteado]);
    }
}

function exibirTextoSorteado(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    amigoIncluir = document.querySelector('input');
    amigoIncluir.value = '';
}

function exibirAmigos(tag, texto) {
    let amigoLista = document.querySelector(tag);
    amigoLista.innerHTML = texto;
}
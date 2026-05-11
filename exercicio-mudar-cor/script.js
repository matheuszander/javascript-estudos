let campo = document.querySelector("#campo");

let botao = document.querySelector("#botao");

let body = document.querySelector("body");

botao.onclick = function() {

    let cor = campo.value;

    body.style.backgroundColor = cor;

}

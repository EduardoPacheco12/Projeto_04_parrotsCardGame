const lista2 = [];
const arrayGifs = ["fiestaparrot.gif", "fiestaparrot.gif", "unicornparrot.gif", "unicornparrot.gif", "bobrossparrot.gif", "bobrossparrot.gif", "revertitparrot.gif",  "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "explodyparrot.gif", "explodyparrot.gif", "metalparrot.gif", "metalparrot.gif"];
const arrayGifs2 = [];
let numeroCartas = 0;
let primeiraCarta;
let segundaCarta;
let primeiroTexto;
let segundoTexto;
let cartas;
let finalizou;
let totalCartas;
let recomecarJogo;

function comparador() { 
	return Math.random() - 0.5; 
}

function iniciarJogo() {
    numeroCartas = prompt("Quantas cartas você quer utilizar?(escolha um valor par entre 4 à 14 cartas)")
    if (numeroCartas > 14 || numeroCartas < 4) {
        alert("Quantidade inválida de cartas!!! Tente novamente");
        console.log(numeroCartas);
        iniciarJogo();
    }
    if (numeroCartas % 2 !== 0) {
        alert("Valor inválido!!! Tente novamente");
        console.log(numeroCartas);
        iniciarJogo();
    }
    for(let i = 0; i < numeroCartas; i++) {
        arrayGifs2[i] = arrayGifs[i];
    }
    arrayGifs2.sort(comparador);

    cartas = document.querySelector(".conteudo");
    cartas.innerHTML = "";
    for(let j = 0; j < numeroCartas; j++) {
        cartas.innerHTML += `
        <div onclick=virarCarta(this)>
            <div class="face frente">
                <img src="./Images/front.png">
            </div>
            <div class="face verso">
                <img src="./Images/${arrayGifs2[j]}">
            </div>
        </div>
        `;
    }
}

function virarCarta(elemento) {
    elemento.classList.add("virar");
    textoDiv = elemento.innerHTML;
    lista2.push(textoDiv);
    if (lista2.length % 2 !== 0) {
        primeiraCarta = elemento;
    }
    if (lista2.length % 2 === 0) {
        segundaCarta = elemento;
    }
    if (lista2.length % 2 === 0) {
        primeiroTexto = lista2[lista2.length - 2];
        segundoTexto = lista2[lista2.length - 1];
        if (primeiroTexto !== segundoTexto) {
            setTimeout(virarNovamente, 1000);
        }
    }
    finalizou = document.querySelectorAll(".conteudo .virar");
    totalCartas = document.querySelectorAll(".conteudo > div");
    if (finalizou.length === totalCartas.length) {
        setTimeout(jogoVencido, 1000);
    }
}

function virarNovamente() {
    primeiraCarta.classList.remove("virar");
    segundaCarta.classList.remove("virar");
}

function jogoVencido() {
    alert(`Parabéns, você ganhou em ${lista2.length} jogadas!!!`);
}

iniciarJogo();

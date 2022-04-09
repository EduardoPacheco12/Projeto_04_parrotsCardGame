let numeroCartas = 0;

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
    const arrayGifs = ["fiestaparrot.gif", "fiestaparrot.gif", "unicornparrot.gif", "unicornparrot.gif", "bobrossparrot.gif", "bobrossparrot.gif", "revertitparrot.gif",  "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "explodyparrot.gif", "explodyparrot.gif", "metalparrot.gif", "metalparrot.gif"]
    const lista = document.querySelector(".conteudo");
    lista.innerHTML = "";
    for(let i = 0; i < numeroCartas; i++) {
        lista.innerHTML += `
        <div class="carta" onclick="virarCarta()">
        <img class="escondido" src="./Images/front.png">
        <img src="./Images/${arrayGifs[i]}">
        </div>
        `;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

iniciarJogo();

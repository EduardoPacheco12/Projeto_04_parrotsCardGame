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
    const arrayGifs = ["fiestaparrot.gif", "fiestaparrot.gif", "unicornparrot.gif", "unicornparrot.gif", "bobrossparrot.gif", "bobrossparrot.gif", "revertitparrot.gif",  "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "explodyparrot.gif", "explodyparrot.gif", "metalparrot.gif", "metalparrot.gif"];
    const arrayGifs2 = [];
    for(let i = 0; i < numeroCartas; i++) {
        arrayGifs2[i] = arrayGifs[i];
    }
    arrayGifs2.sort(comparador);

    const lista = document.querySelector(".conteudo");
    lista.innerHTML = "";
    for(let j = 0; j < numeroCartas; j++) {
        lista.innerHTML += `
        <div class="carta" onclick=virarCarta(this)>
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

function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(elemento) {
    elemento.classList.add('virar');
    let cartasViradas = document.querySelectorAll(".virar");
    console.log(cartasViradas);
    
}


iniciarJogo();

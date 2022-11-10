// programa para embaralhar e sortear cartas

function sortear() {

    // Arrays de cartas e naipes
    const naipes = ["Espadas", "Ouros", "Paus", "Copas"];
    const cartas = [
        "Ás",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Valete",
        "Dama",
        "Rei",
    ];

    let resultado = window.document.getElementById("resultado");

    // array vazio para conter as cartas
    let deck = [];

    // Cria um deck de cartas
    for (let i = 0; i < naipes.length; i++) {
        for (let x = 0; x < cartas.length; x++) {
            let carta = { Value: cartas[x], Naipe: naipes[i] };
            deck.push(carta);
        }
    }

    // embaralha as cartas
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    resultado.innerHTML = `<h5>As cartas sorteadas foram:</h5>`;
    console.log('As cartas sorteadas foram:');

    // mostra o resultado
    for (let i = 0; i < 6; i++) {

        resultado.innerHTML += `${deck[i].Value} de ${deck[i].Naipe} <br>`;
        resultado.style.backgroundColor = "lightyellow";
        resultado.style.color = "black";
        resultado.style.width = "300px";
        resultado.style.borderRadius = "5%";
        resultado.style.padding = "2%";

        console.log(`${deck[i].Value} de ${deck[i].Naipe}`)
    }
}
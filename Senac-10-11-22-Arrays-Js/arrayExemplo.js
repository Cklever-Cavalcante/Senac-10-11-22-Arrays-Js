
const array1 = [1, 'c', 'c', 'c', 2, 3, 'c', 3, 2, 4, 7, 3,'c','c'];
let frequencia = 1;
let m = 0;
let item;
for (let i = 0; i < array1.length; i++) {
    for (let j = i; j < array1.length; j++) {
        if (array1[i] == array1[j])
            m++;
        if (frequencia < m) {
            frequencia = m;
            item = array1[i];
        }
    }
    m = 0;
}
document.getElementById("itens").innerHTML = `O item <mark><i> ${item} </i></mark> aparece <mark><i> ${frequencia} </i></mark> vezes.`;
console.log(`O item ${item} aparece ${frequencia} vezes.`);

// //////////////////////////////////////////////////////////////////////////////////////////////////


const arrayNumeros = [40, 100, 1, 5, 25, 10, 57, 22, 86,34];
document.getElementById("demonstrar").innerHTML = arrayNumeros;

function reorganizar() {

    arrayNumeros.sort(function (a, b) { return a - b });
    document.getElementById("demonstrar").innerHTML = arrayNumeros;
}


// //////////////////////////////////////////////////////////////////////////////////////////////////


let alunos = [
    ['Fernando', 24],
    ['Laura', 23], 
    ['Bruna', 26]
    ];
    
    
    document.getElementById("exemploMatriz").innerHTML =`<mark> alunos[0]</mark> Acessa o primeiro item da matriz (<mark> ${alunos[0]} </mark>) <br><br> 
    <mark> alunos[1][0]</mark> Acessa o primeiro item do segundo array interno (<mark> ${alunos[1][0]} </mark>) <br><br> 
    <mark> alunos[2][1]</mark> Acessa o segundo item do terceiro array interno (<mark> ${alunos[2][1]} </mark>)`;
    
    // acessa o primeiro item 
    console.log(alunos[0]); // ["Fernando", 24]
    
    // acessa o primeiro item do segundo array interno
    console.log(alunos[1][0]); // Fernando
    
    // acessa o segundo item do terceiro array interno
    console.log(alunos[2][1]); // 24

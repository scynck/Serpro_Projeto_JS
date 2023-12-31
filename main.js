/* Variáveis podem ser do tipo String, numeric, boolean, objetos, etc.*/

var nome = "Adelaide"; // No JS não é obrigatório terminar as linhas com ; mas é uma boa prática
var especie = true;
var peso = 15;
var especieParsed;

var tagNome = document.getElementById("nome");
tagNome.innerHTML = "Nome: " + nome;

var tagPeso = document.getElementById("peso");
tagPeso.innerHTML = "Peso: " + peso + "kg";

if (especie){
    especieParsed = "Sim"
}
else{
    especieParsed = "Não"
}
var tagEspecie = document.getElementById("especie");
tagEspecie.innerHTML = "É gato? " + especieParsed;

// Arrays podem ser declarados da seguinte forma:

var listaNumeros = [1, 2, 3, 4];
var listaNomes = ["Adelaide", "Celeste", "Frufrinha"];

document.getElementById("teste").innerHTML = listaNumeros[listaNumeros.length-1] + ", " + listaNomes[listaNomes.length - 1];

// Funções são declaradas da seguinte forma:

function printaTeste(nomeTag, varPrint){
    document.getElementById(nomeTag).innerHTML = varPrint;
}

// Objetos podem ser declarados da seguinte forma:

var gato1 = {
    nome: "Adelaide",
    idade: 12,
    peso: 4.5,
    temperamento: "Estrela",
    getDetalhes: function(){
        return "Nome: " + this.nome + ", Idade: " + this.idade + ", Peso: " + this.peso + ", Temperamento: " + this.temperamento;
    }
}

var gato2 = {
    nome: "Celeste",
    idade: 4,
    peso: 5,
    temperamento: "Mimada",
    getDetalhes: function(){
        return "Nome: " + this.nome + ", Idade: " + this.idade + ", Peso: " + this.peso + ", Temperamento: " + this.temperamento;
    }
}

var gato3 = {
    nome: "Frufrinha",
    idade: 3,
    peso: 3.4,
    temperamento: "Assustada",
    getDetalhes: function(){
        return "Nome: " + this.nome + ", Idade: " + this.idade + ", Peso: " + this.peso + ", Temperamento: " + this.temperamento;
    }
}

var gatosArray = [gato1, gato2, gato3]

// Operador ternário
gato1.nome == "Adelaide" ? printaTeste("teste1", gato1.getDetalhes()) : printaTeste("teste1", "Não");


var containerDiv = document.getElementById("gatosFor");
for (var i = 0; i < gatosArray.length; i++){
    var paragrafo = document.createElement("p");
    paragrafo.innerHTML = gatosArray[i].getDetalhes();
    containerDiv.appendChild(paragrafo);
}


var containerDiv = document.getElementById("gatosWhile");
var i = 0;
while(i < gatosArray.length){
    var paragrafo = document.createElement('p');
    paragrafo.innerHTML = gatosArray[i].getDetalhes();
    containerDiv.appendChild(paragrafo);
    i++;
}

var containerDiv = document.getElementById("gatosDoWhile");
var i = 0;
do{
    var paragrafo = document.createElement('p');
    paragrafo.innerHTML = gatosArray[i].getDetalhes();
    containerDiv.appendChild(paragrafo);
    i++
}while(i < gatosArray.length);


/*function pesquisar(){
    var campoEntrada = document.getElementById("pesquisa");
    var valorEntrada = campoEntrada.value;
    var publicarDado = document.createElement("p");
    publicarDado.innerHTML = valorEntrada
    console.log(valorEntrada)
    document.getElementById("divPesquisar").appendChild(publicarDado);
}*/

function pesquisar(){
    var entrada = document.getElementById("pesquisa");
    var valorEntrada = entrada.value;
    var idDiv = document.getElementById("form");
    var saida = document.createElement('p');
    saida.innerHTML = valorEntrada;
    idDiv.appendChild(saida);
}

function BubbleSort(){
    var entrada = document.getElementById("Ordena").value;
    var vetor = entrada.split(',').map(x => Number(x));

    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length-1 - i; j++) {
            if (vetor[j] > vetor[j+1]) {
                var aux = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = aux;
                console.log(vetor[j])
            }           
        }       
    }    
    var campoResposta = document.getElementById("OrdenadoBubble");
    console.log(campoResposta);
    campoResposta.value = vetor;
}


function QuickSortDecorator(){
    var entrada = document.getElementById("Ordena").value;
    var vetor = entrada.split(',').map(x => Number(x));
    var saida = QuickSort(vetor, 0, vetor.length-1);
    var campoResposta = document.getElementById("OrdenadoQuick");
    campoResposta.value = saida;
}

function QuickSort(vetor, iniVet, endVet){
    var i = iniVet;
    var j = endVet;
    console.log(i)
    console.log(j)
    console.log((i + j)/2)
    var pivo = vetor[Math.round((i + j)/2)]

    while(i<=j){
        while (vetor[i] < pivo){
            i = i + 1;
        }
        while (vetor[j] > pivo){
            j = j - 1;
        }
        if(i<=j){
            let aux = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = aux;
            i = i + 1;
            j = j - 1;
        }
        if(iniVet < j){
            QuickSort(vetor, iniVet, j);
        }
        if(i < endVet){
            QuickSort(vetor, i, endVet);
        }
        
    }
    return vetor;
}

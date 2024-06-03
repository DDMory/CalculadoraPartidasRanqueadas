// função para calcular as vitorias
function CalcRanque(vitorias, derrotas){
    return vitorias - derrotas;
}

// criação das variaveis
var partidas = { "vitorias" : 0, "derrotas" : 0 }
partidas.vitorias = Math.floor(Math.random() * 200); // vitorias = valores entre 0 a 200 
partidas.derrotas = Math.floor(Math.random() * 200); // derrotas = valores entre 0 a 200

var pontos = CalcRanque( partidas.vitorias, partidas.derrotas)
var ranque;

// tratamento para os pontos não serem negativo
if(pontos < 0)
    pontos = 0


//estrutura de decisão para atribuir o ranque
if(pontos <= 10) {
    ranque = 'Ferro'
} else if( pontos > 10 && pontos <= 20 ){
    ranque = 'Bronze'
} else if( pontos > 20 && pontos <= 50 ){
    ranque = 'Prata'
} else if( pontos > 50 && pontos <= 80 ){
    ranque = 'Ouro'
} else if( pontos > 80 && pontos <= 90 ){
    ranque = 'Diamante'
} else if( pontos > 90 && pontos <= 100 ){
    ranque = 'Lendário'
} else{
    ranque ='Imortal'
}

//impressão do resultado final
infoRanque = `\nO Herói tem de saldo de ${pontos} está no nível de ${ranque}\n`
console.log(infoRanque)
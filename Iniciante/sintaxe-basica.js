/* 
Primeira Sintaxe Básica
*/

const nomee = "Carla";


function somar(a, b) { //função
    return a + b; 
}

somar(2, 4); //retorna a soma de a + b
//O resultado é 6

/* 
Segunda Sintaxe Básica
*/
        //document = chama no html
// const btn = document.querySelector('.btn'); // função que dá ação em um botão/btn

// btn.addEventListener('click', function() { //adicionamos um evento (addEventListener)
//     btn.classList.add('ativo'); // quando a pessoa clicar no botão 'ativa' ele (muda de cor atráves do css)
// });

/* 
VARIÁVEIS
*/

 //guarda os dados na memória (var, let, const)

var nome = "Carla";
let idade = 31;
const possuiFaculdade = false;

console.log(nome, idade, possuiFaculdade);

/* 
DRY - (Don't repeat tourself - Não repetir variáveis)
*/

/* 
SINTAXE = palavra chave
*/

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

/* 
VIRGULA = Utilizei a vírgula para criar mais de uma variável, sem repetir a palavra chave var.
*/

var nome = 'André',
    idadee = 28,
    possuiFaculdadee = true;

/* 
SEM VALOR = Pode declarar ela e não atribuir valor inicialmente.
*/

var varSemDefinirConteudo;
console.log(varSemDefinirConteudo);// retorna undefined

/* 
NOME
*/

// Inválido
/* var §nome;
 var function;
 var 1possuiFaculdade; */

// Válido
var $selecionar;
var _nome;
var nome1;
var possuiFaculdadeNoExterior;

/* 
DECLARAR = Erro ao tentar utilizar uma variável que não foi declarada.
*/

//console.log(varNaoDefinida);
// retorna nome is not defined

/* 
HOISTING = São movidas para cima do código, porém o valor atribuído não é movido.
*/

// atribuir a var após o console.log não mostrará nada, pois o JS lê linha após linha
console.log(nome);
var nome = 'André'; 
// Retorna undefined

var profissao = 'Designer';
console.log(profissao);
// Retornar Designer

/* 
MUDAR O VALOR ATRIBUÍDO = É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const
*/

var comida;
console.log(comida);
comida = 'Feijão';
console.log(comida);

var idadee = 28;
idadee = 29;

let precoo = 50;
precoo = 25;

const possuiFaculdad = true;
possuiFaculdad = false;
// Retorna um erro
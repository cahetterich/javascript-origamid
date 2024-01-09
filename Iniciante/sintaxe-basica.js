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
console.log(comida); // aparece undefined, pois não foi definida a nossa var
comida = 'Feijão';
console.log(comida);

//podemos redeclarar o valor / mudar ele também

var time = 'Vasco'; // primeiro valor declarado
console.log(time); 
time = 'Flamengo'; // segundo valor declarado
console.log(time);


var idadee = 28; // var pode ser alterado
var idadee = 29;

let precoo = 50; // let pode ser alterado, contanto que não seja incluido novamente "let" antes
precoo = 25;

const possuiFaculdad = true; // const não pode ser alterado, ela é única
// Retorna um erro

/*
EXERCÍCIO
*/

// Declarar uma variável com o seu nome
let meuNome = 'Carla';

// Declarar uma variável com a sua idade
let minhaIdade = 31;

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var empada;

// Atribuir valor a sua comida favorita
var empada = 'Empada de frango';

// Declarar 5 variáveis diferentes sem valores
let animal;
let raca;
let peso;
let dono;
let nascimento;  
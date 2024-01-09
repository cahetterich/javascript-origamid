/*
7 TIPOS DE DADOS =

todos são primiticos, exceto os objetos
 */

var nome = 'Carla'; // String
var idade = 31; // Number
var possuiFaculdade = true; // Boolean -  true/false
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

/*
VERIFICAR TIPO DE DADO
*/

var nome = 'Carla';
console.log(typeof nome);
// retorna string

var idade = 31;
console.log(typeof idade);
// retorna number

//bug de retorno do valor null - aparece o type como object porém é null
var time = null;
console.log(typeof time);
// typeof null retorna object
                       
/*
STRING

Você pode somar uma string e assim concatenar as palavras.
*/

var nome = 'Carla';
var sobrenome = 'Hetterich';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

//Você pode somar números com strings, o resultado final é sempre uma string.
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase);

/*
ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
*/

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
//"JavaScript é "super" fácil"; // Inválido

/*
TEMPLATE STRING
*/

var gols = 1000;
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String - não quebra a string
console.log(frase2);
// Você deve passar expressões / variáveis dentro de ${}

/*
EXERCÍCIO

Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.
*/

// Declare uma variável contendo uma string

var frase3 = 'Essa é uma string'
console.log(frase3);

// Declare uma variável contendo um número dentro de uma string
var numString = 56789;
var frase4 = `Essa é uma string com um ${numString} numero`;
console.log(frase4);

var ano = '2018';

// Declare uma variável com a sua idade
var minhaIdade = 31;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var meuNome = 'Carla';
var meuSobrenome = 'Hetterich';
var nomeCompleto1 = meuNome + ' ' + meuSobrenome;
console.log(nomeCompleto1);

//ou

var meuNome = 'Carla';
var meuSobrenome = 'Hetterich';
var nomeCompleto1 = `${meuNome} ${meuSobrenome}`;

// Coloque a seguinte frase em uma variável: It's time
var frase5 = `It's time`;
console.log(frase5);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof meuNome);

//ou 

var verificarTipoNome = typeof meuNome;
console.log(verificarTipoNome);
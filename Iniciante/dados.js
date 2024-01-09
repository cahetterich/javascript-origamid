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

/*
NÚMEROS E OPERADORES ARITMÉTICOS
*/

//numeros
var idade1 = 28;
var gols1 = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000 = 2 e 10 zeros

console.log(idade1); // quando é um number aparece em azul no console

//operadores
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 2*2*2*2 = 16
var modulo = 14 % 5; // 4 = resto inteiro  *10 dividico por 5 é 2, mas sobra o 4 que é nosso resto inteiro da divisão


/*
OPERADORES ARITMÉTICOS (STRINGS)
*/

//Lembrando que soma + em Strings serve para concatenar e não somar
var soma1 = '100' + 50; // 10050  - é uma string
// na subtração, multiplicação e divisão, se houver uma string apenas com números o JS fará a conta
var subtracao1 = '100' - 50; // 50   
var multiplicacao1 = '100' * '2'; // 200
// porém, se ouver uma frase escrita, aparecerá como NaN =
var divisaoNan = 'Comprei 10' / 2; // NaN (Not a Number)
// É possível verificar se uma variável é NaN ou não com a função isNaN()

console.log(divisaoNan);
//ou
console.log(isNaN(divisaoNan)); // aparecerá true

/* 
NAN = NOT A NUMBER
 */

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg' - string
var pesoPorDois = peso / 2 // NaN (Not a Number)
console.log(pesoPorDois);

/* 
A ORDEM IMPORTA

Começa por multiplicação e divisão, depois por soma e subtração.
 */

var total1 = 20 + 5 * 2; // 30
//Parênteses para priorizar uma expressão
var total2 = (20 + 5) * 2; // 50 
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 + 20 + 30 * 4 / 2 + 10; // 40
//primeiro multiplicação '30 * 4' = 120
//segundo divisão por '/ 2' = 60
//terceiro continua a ordem normal de soma = 110
console.log(total4);


/* 
OPERADORES ARITMÉTICOS UNÁRIOS 
*/

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

//Mesma coisa para o decremento --x
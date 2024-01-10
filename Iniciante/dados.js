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
// porém, se houver uma frase escrita, aparecerá como NaN =
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

// ++ = incremento
var incremento = 5;
console.log(incremento++); // 5 - incluimos o '++' para que seja incrementado mais um na próxima vez que for 'chamado'
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6 - se incluirmos o '++' antes, ele já somará
console.log(incremento2); // 6

// é igual a 
var x = 7;
x = x + 1;
console.log(x);

//Mesma coisa para o decremento --x

var decremento1 = 5;
console.log(--decremento1); // 4 - se incluirmos o '--' antes, ele diminui 1 número


// O '+' e '-' tenta transformar o valor seguinte em número
//porem se incluirmos em uma string dará NaN
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

//já se a string for apenas de números retornará um número
var idade = '28'; // também podemos transformar em número colocando o + antes de '28' => +'28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

//porém, se utilizarmos apenas o '+' ele vai contatenar, e não somar como desejado
somaIdade = 5;
console.log(idade + somaIdade); // 285
//por isso precisamos colocar o '+' antes de idade, para que seja transformado em um número

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// O '-' antes de um número torna ele negativo

/*
EXERCÍCIO
*/

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35
console.log(total);

// Crie duas expressões que retornem NaN
var NaN1 = 'Faremos Lasanha hoje' / 2; // NaN (Not a Number)
console.log(NaN1);

var NaN2 = '30 é o ano do sucesso'; // NaN (Not a Number)
console.log(+NaN2);

// Somar a string '200' com o número 50 e retornar 250
var stringNumero = '200';
console.log(+stringNumero + 50);

// Incremente o número 5 e retorne o seu valor incrementado

var incremento3 = 5;
console.log(++incremento3);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)   

console.log(+numero / 2, unidade);

/*
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '40kg'
console.log(peso);

 */


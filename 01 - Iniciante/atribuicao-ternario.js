/*
Atribuição e Ternário
*/

/* COMENTÁRIOS

Servem para explicar o código
*/

// Comentário de uma linha

/*
Comentário
com diversas
linhas
*/

// var nome = 'André';

//Comentar uma linha de código desativa a mesma. Não deixe linhas de código comentadas no arquivo final.

/*
OPERADORES DE ATRIBUIÇÃO

Podem funcionar como formas abreviadas
*/

var x = 5;
var y = 10;
console.log(x += y); // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

console.log('-------------');
/*
OPERADOR TERNÁRIO

Abreviação de condicionais com if e else
*/

var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber); // Pode beber

// Primeiro: condição ? Segundo: true : Terceiro: false ;

// Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição


var idade = 19;
var naoPossuiDiabetes = false;

var podeBeber = (idade >= 18 && naoPossuiDiabetes); // ? true : false;  - só a expressão já retorna um valor boolean, então não faz sentido retornar "? true : false;", o correto é retornar uma string e número.
console.log(podeBeber); // Pode beber

console.log('-------------');
/*
IF ABREVIADO

Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código
*/

var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');  // podemos colocar assim, mas não é uma boa prática
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');

  // Eu particularmente prefiro a segunda opção aqui.
  console.log('-------------');
  /*
  EXERCÍCIO
  */

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;
var darCredito;

var darCredito = (possuiCarro === true && possuiCasa === true) ? 'Crédito Concedido' : 'Crédito Negado';
console.log(darCredito);

//ou 

var darCredito = (possuiCarro && possuiCasa );  // não precisamos fazer a verificação de '=== true', pois já é uma expressão booleana
console.log(darCredito);
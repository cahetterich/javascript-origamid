/*
 Boolean e Condicionais
 */

 /*
 BOOLEAN
 Existem dois valores booleanos false ou true.
  */

var possuiGraduacao = true;
var possuiDoutorado = false;

/*
CONDICIONAIS IF E ELSE

Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.
*/

var possuiGraduacao1 = true;

if(possuiGraduacao1) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else

//valor dentro dos parênteses sempre será avaliado em false ou true.

/*
CONDICIONAIS IF E ELSE

Se o if não for verdadeiro, ele testa o else if
*/

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado


var almocei = true;
var jantei = false;

if(almocei && jantei) { 
    console.log('Fiz todas as refeições importantes do dia')
} else if(almocei) {
    console.log('Hoje eu almocei');
} else if(jantei) {
  console.log('Hoje eu só jantei'); 
} else {
  console.log('Não comi nada');
}

//outro exemplo

var nome = ''; //vazio  

if (nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}


/*
SWITCH

Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
 */

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}


/*
TRUTHY E FALSY

Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana
*/

//Falsy:
// if(false)
// if(0) // ou -0
// if(Nan)
// if(null)
// if(undefined)
// if('')  // ou "" ou `` sem espaço

// Todo o resto é truthy - true:
// if(true)
// if(1)
// if(' ') // tem espaço
// if('andre')
// if(-5)
// if({})

/*
OPERADORES LOGICOS DE NEGAÇÃO

O operador ! , nega uma operação booleana. Ou seja, !true é igual a false
basicamente retorna o resultado contrário
*/

//Truthy
// if(!true) // false
// if(!1) // false
// if(!'') // true
// if(!null) // true
// if(!undefined) // true

//obs: podemos utilizar o !! para verificar se uma expressão é truthy ou falsy, pois ele confirma qual é o resultado

// if(!!' ') // true 
// if(!!'') // false


var possuiGraduacao2 = false; // aqui é falso, mas se torna true na visão do ! para que seja mostrado na função

if(!possuiGraduacao2) { // falso se torna true
    console.log(possuiGraduacao2);
    console.log('Não possui graduação'); // aparece a mensagem
}


/*
OPERADORES DE COMPARAÇÃO

Vão sempre retornar um valor booleano
*/

// > maior
// < menor
// <= menor ou igual
// >= maior ou igual


10 > 5; // true
5 > 10; // false
20 < 10; //false
10 <= 10; // true
10 >= 11; // false

/*
O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipode dado deve ser o mesmo quando usamos ===
*/

// == igual
// === estritamente igual (dado e tipo)
// != diferente
// !== estritamente diferente (dado e tipo)

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15; // true
10 != '10'; // false
// 10 !=== '10'; // true

//exemplo

var x = 10;
console.log(x == 10); // true, pois x é igual a 10 

var y = 'Gato';
console.log(y == 'gato'); // false, pois um começa com letra minúscula e o outro com maiúscula

console.log(y !== 'Gato'); // false, aqui por mais que seja igual estamos perguntando se é diferente, e por isso dá falso, pois são iguais

/*
OPERADORES LÓGICOS &&

&& Compara se uma expressão e a outra é verdadeira
*/

//retorna sempre o valor falso comparando com outro valor
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

// Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

if( (5 - 5) && (5 + 5)) { // false pois 5 - 5 = 0 que é falso
    console.log('Verdairo');
} else {
    console.log('Falso');
}

//ou

var condicional = (5 - 10) && (5 + 5);

if(condicional) {            // true pois 5 - 10 = -5 que é negativo, porém um número verdadeiro, por isso dá true
    console.log('Verdadeiro', condicional);
} else {
    console.log('Falso');
}

/*
OPERADORES LÓGICOS ||

|| Compara se uma expressão ou outra é verdadeira
*/

// retorna sempre o primeiro valor verdadeiro comparando com outro valor
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true



var condicional2 = (5 - 5) || (5 + 5) || (10 - 2); // 5-5=0 (falso) ou 5+5=10 (verdedeiro) ou 10-2=8 (verdadeiro)
if(condicional2) {            // true  10, pois retorna o primeiro valor true que encontrar
    console.log('Verdadeiro', condicional2);
} else {
    console.log('Falso');
}

var condicional3 = (5 - 5) || (5 + 5) && (10 - 2); // 5-5=0 (falso) ou 5+5=10 (verdedeiro) ou 10-2=8 (verdadeiro)
if(condicional3) {            // true  8, pois usando && ele retorna o último valor true que encontrar
    console.log('Verdadeiro', condicional3);
} else {
    console.log('Falso');
}

/*
EXERCÍCIO
*/

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 31;    
var idadeParente = 54;

if(minhaIdade > idadeParente) {
    console.log('É maior');
} else if(minhaIdade < idadeParente) {
    console.log('É menor');
} else {
    console.log('É igual');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3, 5, 3
console.log(expressao); // retorna 3, true

var expressao1 = (5 - 2) && (5 - 's') && (5 - 2); // 3, NaN, 3
console.log(expressao1); // retorna NaN, false, pois mostra o falso encontrado

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome);         // true 
console.log(!!idade);        // true 
console.log(!!possuiDoutorado); // false: ''
console.log(!!empregoFuturo); // false: undefined
console.log(!!dinheiroNaConta); // false 0

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil == china){
    console.log('Brasil tem o mesmo total de habitantes');
} else {
    console.log('Brasil tem o menor total de habitantes');
}

//ou

if(brasil > china){
    console.log('Brasil tem mais habitantes');
} else {
    console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); // falso, pois 'Gato' é diferente de 'gato'
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // Cão, pois se tudo for verdadeiro no && aparecerá o último resultado 
} else {
  console.log('Falso');
}
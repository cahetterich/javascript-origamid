/*
7 TIPOS DE DADOS =

todos são primiticos, exceto os objetos
 */

var nome = 'André'; // String
var idade = 28; // Number
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
                       
/*
ESCOPO DE FUNÇÃO

Variáveis declaradas dentro de funções não são acessadas fora das mesmas.
*/

// var carro = 'Fusca'; // para que seja mostrado, temos que declarar fora da nossa function

function mostrarCarro() {
    var carro = 'Fusca'; // var carro dentro da função
    console.log(carro); // só aparecerá dentro da função
  }
  
  mostrarCarro(); // se chamarmos fora, dará erro
  //console.log(carro); // Erro, carro is not defined
  
  // Escopo serve para evita o conflito entre nomes de variáveis.
  console.log('-------------');
  /*
  VARIÁVEL GLOBAL (ERRO)

  Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.
  */

function mostrarCarro1() {
    carro1 = 'Fusca';  // nunca devemos declarar variáveis dessa forma, sem o var/let/const
    console.log(carro1);
  }
  
  mostrarCarro1(); // Fusca
  console.log(carro1); // Fusca
  
  // usar 'use strict' no inicio do js impede isso, pois dá erro e mostra as variaveis não declaradas.

  console.log('-------------');
  /*
  ESCOPO DE FUNÇÃO (PAI)

  Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.
   */

var carro2 = 'Fusca';

function mostrarCarro2() {
  var frase = `Meu carro é um ${carro2}`;
  console.log(frase);
}

mostrarCarro2(); // Meu carro é um Fusca
console.log(carro2);  // Fusca

console.log('-------------');
/*
ESCOPO DE BLOCO

Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.
*/   

if(true) {
    var carro = 'Fusca';
    console.log(carro);
  }
  console.log(carro); // Carro

  if(true) {
    let mes = 'Dezembro';
    console.log(mes);
  }
  // console.log(mes); // apresentará erro, pois let e const não vazam do bloco
  
  console.log('-------------');

  // não leva função, e geralmente vem de if

/*
VAR VAZA O BLOCO

Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.
*/

// var carro3;

if(false) {
  var carro3 = 'Palio';
  console.log(carro3);
}
console.log(carro3); // undefined - é como se tivesse declarado ela no inicio, porém sem valor "var carro3;"

console.log('-------------');
/*
CONST E LET NO LUGAR DE VAR

A partir de agora vamos utilizar apenas const e let para declarmos variáveis.
*/

if(true) {
  const carro4 = 'Ford';
  console.log(carro4);
}
// console.log(carro4); // erro, carro is not defined pois const não vaza

console.log('-------------');
/*
{} CRIA UM BLOCO

Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}
*/

{
  var carro = 'Fusca';
  // const ano = 2018; // não puxa const pois está dentro de um escopo declarada como const, se fosse var puxaria
}
console.log(carro); // Carro
// console.log(ano); // erro ano is not defined

console.log('-------------');
/*
FOR LOOP

Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.
*/

for(var i = 0; i < 10; i++) { // incrementa 1 número de cada vez de 0 à 9
  console.log(`Número ${i}`);
}
console.log(i); // 10 - como o var vaza o escopo, ao puxar a 'var i' fora, acaba puxando i++ = 10, por isso é importante usar apenas let e const

console.log('-------------');
/*
FOR LOOP COM LET

Com o let evitamos que o número vaze.
*/

for(let y = 0; y < 10; y++) {
  console.log(`Número ${y}`);
}
//console.log(y); // y is not defined


console.log('-------------');
/*
CONST

Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
*/

const mes = 'Dezembro';
//mes = 'Janeiro'; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor

const data = { // o objeto não pode ser alterado mas os elementos podem
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}
console.log(data);
console.log(data.dia = 29); // Funciona
console.log(data); //  muda o dia para 29
//data = 'Janeiro'; // erro


console.log('-------------');
/*
LET

Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
*/

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

//let ano = 2020; // erro, redeclarou a variável

//Geralmente vamos utilizar o const.

console.log('-------------');
/*
EXERCÍCIO
 */

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;  
//} - ao fechar o escopo, const e let não são 'puxados'
//console.log(var, marca, portas); - erro proposto para correção
console.log(cor, marca, portas); // - correto
}

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  //const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(2)); //4 (2 + 2)
console.log(dividirDois(8)); // 4 (8 / 2)

// O que fazer para total retornar 500?
const numero1 = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero1;
console.log(total);

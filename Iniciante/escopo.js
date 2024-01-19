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
  console.log(mes); // apresentará rro, pois let e const não vazam do bloco
  
  console.log('-------------');

  // não leva função, e geralmente vem de if

/*
VAR VAZA O BLOCO
*/
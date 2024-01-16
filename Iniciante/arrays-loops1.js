/**
 Arrays e Loops
 */

 /*
 ARRAY

 É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável
 */

 var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
console.log(videoGames[2]); // Xbox

console.log('---');
//Acesse um elemento da array utilizando [n]

/*
MÉTODOS E PROPRIEDADES DE UMA ARRAY
*/

var videoGames = ['Switch', 'PS4', 'XBox'];  // tudo é objeto

console.log(videoGames.pop()); // Remove o último item e retorna ele - Xbox
console.log(videoGames); // sem 'XBox'
console.log(videoGames.push('3DS')); // Adiciona ao final da array + '3DS'
console.log(videoGames); // ['Switch', 'PS4', '3DS']
console.log(videoGames.length); // 3

console.log('---');
// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente

/* 
FOR LOOP

Fazem algo repetidamente até que uma condição seja atingida.
*/

// iniciamos de qualquer número
for (var numero = 0; numero < 10; numero++) {   // '++' = numero = numero + 1 (incrementa 1)
    console.log(numero);   // Retorna de 0 a 9 no console
}

console.log('---');
// for (var numero = 1; numero <= 10; numero++) {   // '<=' = menor ou igual 10
//     console.log(numero);   // Retorna de 1 a 10 no console
// }

  // O for loop possui 3 partes, início, condição e incremento

/*
WHILE LOOP
*/

var i = 1;
while (i <= 10) {
  console.log(i); // Retorna de 0 a 9 no console
  i++; // aqui podemos alterar para incrementar de 5 em 5 por exemplo = 'i = i + 5;
}
console.log('---');

var x = 0;
while (x <= 20) {
  console.log(x); // retorna 0, 5, 10, 15 e 20
 x = x + 5;
}
console.log('---');

//O for loop é o mais comum  

/*
ARRAYS E LOOPS
*/

var videoGames2 = ['Switch', 'PS4', 'XBox', '3DS']; // Array de itens
console.log('Todos os jogos: ',videoGames2); // mostra o array
for (var i = 0; i < videoGames2.length; i++) {  
  console.log(videoGames2[i]);  // mostra cada item do array 
}
console.log('---');
// O for loop é o mais comum

/*
BREAK

O loop irá parar caso encontro e palavra break
*/

var videoGames3 = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames3.length; i++) {
  console.log(videoGames3[i]);
  if(videoGames3[i] === 'PS4') {
    break;   // colocamos o break quando queremos quebrar o código quando encontrar uma palavra 'PS4' - exemplo
  }   // retorna 'Switch' e 'PS4'
}

console.log('---');
/*
FOREACH

forEach é um método que executa uma função para cada item da Array. 
É uma forma mais simples de utilizarmos um loop com arrays (ou array-like = parecem com arrays)
*/

var frutas= ['Banana', 'Pera', 'Maçã', 'Uva'];
frutas.forEach(function(item, index, array) { // o item vira dinamicamente o item do array, sem precisar usar o for loop
  console.log(item, index, array); //Podemos passar os seguintes parâmetros item, index e array
});
// O argumento item será atribuído dinamicamente
console.log('---');

/*
NÃO SE CONFUNDA COM A SINTAXE
*/

var numero = 0;
var maximo = 5;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}
// Não aconselho escrever da forma acima, mas funciona normalmente.
console.log('---');
/*
EXERCÍCIO
*/

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copasBrasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copasBrasil.forEach(function(ano) { 
    console.log(`O Brasil ganhou a copa de ${ano}.`); 
  });

  /*        ou 

  var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

  for (var i = 0; i < brasilCampeao.length; i++) {
    console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}.`);
  }
  
  */
  console.log('---');
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas1 = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (var i = 0; i < frutas1.length; i++) {
    console.log(frutas1[i]);
    if(frutas1[i] === 'Pera') {
      break;   
    }   
  }
  console.log('---');
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var fruta = frutas1[4];
console.log(`A ultima fruta é: ${fruta}`);

//ou 

var ultimaFruta = frutas1[frutas1.length - 1]; // length serão 5 itens, por isso colocamos o -1

console.log(`A ultima fruta é: ${ultimaFruta}`);
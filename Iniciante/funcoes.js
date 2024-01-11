/*
FUNÇÕES

Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
*/

function areaQuadrado(lado) { // lado = parametro
    return lado * lado;
  }
  
  areaQuadrado(4) // 16
  areaQuadrado(5) // 25
  console.log(areaQuadrado(2)) // 4

//Chamada de function declaration

//ou

//chamamos a função:
function areaQuadrado1() {  
  console.log('Função ativa');
}
//ativamos a função:
areaQuadrado1();
  
function pi() {    // sem parametro, 
    return 3.14;  // porém é como se o return 3.14 fosse seu valor
  }
  
  var total = 5 * pi(); // 15.7
  console.log(total);

//Parênteses () executam uma função

/*
PARÂMETROS E ARGUMENTOS

Ao criar uma função, você pode definir parâmetros.

Ao executar uma função, você pode passar argumentos.
*/

// peso e altura são os parâmetros
function imc(peso, altura) {  // parametros = peso e altura
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(80, 1.80)); // 80 e 1.80 são os argumentos dos parametros
console.log(imc(60, 1.70)); // 60 e 1.70 são os argumentos dos parametros

//Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também

/*
PARÊNTESES EXECUTA A FUNÇÃO
*/

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
console.log(corFavorita()); // retorna 'Você não gosta de nada'
console.log(corFavorita('azul'));
// Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

/*
 ARGUMENTOS PODEM SER FUNÇÕES

 Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
 */

 // addEventListener = adiciona um evento, função do browser

 /*
 addEventListener('click', function() { //função anonima 
  console.log('Clicou');  
}); 
*/

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

                           // callback
/* addEventListener('click', function(){ console.log('Oi') });

é o mesmo que:

function mostraConsole() {
  console.log('Oi')
}

addEventListener('Click', mostraConsole());
 */

/*
PODE OU NÃO RETORNAR UM VALOR

Quando não definimos o return, ela irá retornar undefined.
Ainda sim o código interno da função é executado normalmente, independente de existir valor de return ou não.
*/

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);  // chamamos o console.log na function
}

imc2(20, 1.80); // retorna o imc no console, pois já definimos isso na nossa function, sem ter que incluir o return 
console.log(imc2(80, 1.80)); // porém, faz com que retorne o return do imc e undefined no console

/*
VALORES RETORNADOS

Uma função pode retornar qualquer tipo de dado e até outras funções.
*/

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!'; // retorna uma string
  } else if(idade >= 60) {
    return true; // retorna boolean
  } else {
    return false;
  }
}

console.log(terceiraIdade(20));

// OU 

function terceiraIdade2(idade) { 
  console.log(typeof idade); // mostra o tipo de dado no console
   if(typeof idade !== 'number') { // confere se o dado é um número
    return 'Por favor preencha um número' // se for diferente retorna a mensagem 'Por favor preencha um número no console
  } else if(idade >= 60) {
    console.log('É idoso')
    return true;
  } else {
    console.log('Não é idoso')
    return false;
  }  
}

console.log(terceiraIdade2(80));
// Cuidado, retornar diferentes tipos de dados na mesma função NÃO É UMA BOA PRÁTICA.

/*
 ESCOPO

 Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
 */

 var totalPaises = 193;
 function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`  
}

console.log(precisoVisitar(2));
console.log(totalPaises); // 

/*
ESCOPO LÉXICO

Funções conseguem acessar variáveis que foram criadas no contexto pai
*/

var profissao = 'Web Designer';

function dados() {
  var nome = 'Carla';
  var idade = 30; // variavel não é usada, pois na segunda função temos outra var idade que substitui essa
  function outrosDados() {
    var endereco = 'Itália';
    var idade = 31; // var idade usada
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

/*
HOISTING

Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
*/

imc3(80, 1.80); // imc aparece no console

function imc3(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}


/*
 EXERCÍCIO
 */

 // Crie uma função para verificar se um valor é Truthy

 function numeroReal(el) {
   if (el === 5) {
     return true;
   } else {
     return false;
   }
 }
console.log(numeroReal(5));

//ou 

function isTruthy(dado) { 
  return !!dado;
}
console.log(isTruthy(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(el) {
  return el * 4
}
console.log(perimetro(5));

//ou 

function perimetroQuadrado(lado) { 
  return lado + lado + lado + lado;
}
console.log(perimetroQuadrado(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto() {
  var nome = 'Carla';
  var sobrenome ='Hetterich';
  return `${nome} ${sobrenome}`
}
console.log(nomeCompleto());

//ou

function nomeCompleto2(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto2('Carla', 'Hetterich Worlitz'));

// Crie uma função que verifica se um número é par

function numeroPar(el) { 
  if (el % 2 === 0) {
    return `${el} é um número par`
  } else {
    return `${el} não é um número par`
  } 
}
console.log(numeroPar(7));

// ou

function isEven(numero) {
  var modulo = numero % 2;
  if(modulo === 0) {
  return true;
  } else {
  return false;
  }
}
console.log(isEven(7));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(el) {
  return typeof el
}
console.log(tipoDado('oi'));



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function() {
  console.log('Carla Hetterich Worlitz');
});

// Corrija o erro abaixo

var totalPaises2 = 193;
function precisoVisitar(paisesVisitados) { 
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));




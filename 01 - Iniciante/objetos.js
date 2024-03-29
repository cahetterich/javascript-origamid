/*
OBJETOS

Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
 */

//objeto
var pessoa = {
    nome: 'André', // propriedades
    idade: 28,
    profissao: 'Designer',
    possuiFaculdade: true,
  }
  
  //objeto.propriedade
  console.log(pessoa.nome); // 'André'
  pessoa.possuiFaculdade; // true
  
  //Propriedades e métodos consistem em nome (chave) e valor

/*
MÉTODOS  

É uma propriedade que possui uma função no local do seu valor.
*/

var quadrado = {
    lados: 4, // 4 lados
    area: function(lado) {  // FUNÇÃO DENTRO DO OBJETO = MÉTODO
      return lado * lado;
    },
    perimetro: function(lado) {
      return this.lados * lado;  // this = faz referencia a "isso" no caso o objeto em si 'quadrado' como 'lados'
    },
  }
  
  console.log(quadrado.lados); // 4
  console.log(quadrado.area(5)); // 25
  console.log(quadrado.perimetro(8)); // 32

  
// Abreviação de area: function() {} para area() {}, no ES6+

var quadrado2 = {
    lados2: 4,
    area(lado) {
      return lado * lado;
    },
    perimetro(lado) {
      return this.lados2 * lado;
    },
    cinco() {   // é a mesma coisa que escrever "function"
        return 5;
    },
  }
  
  console.log(quadrado2.cinco());


  /*
  ORGANIZAR O CÓDIGO

  Objetos servem para organizar o código em pequenas partes reutilizáveis.
  */

// Math de matemática
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14
console.log(Math);
console.log(Math.random); // random é uma um método (roxo)
console.log(Math.E); // E é uma propriedade (azul)
console.table(quadrado);
//Math é um objeto nativo de JavaScript. Console é um objeto e log()/table() é um método!

/*
CRIAR UM OBJETO

Um objeto é criado utilizando as chaves {}
*/

var carro = {}; // objeto
var pessoa = {};

console.log(typeof carro); // 'object'

/*
DOT NOTATION GET

Acesse propriedades de um objeto utilizando o ponto .
 */

var menu = {
    width: 800, 
    height: 50,
    backgroundColor: '#84E',
  }
  
// Substitua o valor de uma propriedade utilizando . (ponto) e o = (igual) após o nome da mesma.
menu.backgroundColor = '#000'; // alterei o backgroundColor
menu.color = 'blue';  // inclui um novo item ao objeto menu

//função

  var bg = menu.backgroundColor; // '#84E' ou '#000'
  
  console.log(bg); // puxa o backgroundColor mais recente do objeto menu
 

/*
 ADICIONAR PROPRIEDADES E MÉTODOS

 Basta adicionar um novo nome e definir o valor.
 */

 var menu2 = {
  width: 800,
}

menu2.height = 50; // adicionamos propriedades incluinso o . ponto
menu2.position = 'fixed'; 

console.log(menu2.position);

/*
PALAVRA-CHAVE THIS

this irá fazer uma referência ao próprio objeto.
*/

var height = 120;
var menu3 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;   // this significa a mesma coisa que se escrevesemos menu3
                              // se colocássemos apenas height, puxaria a primeira "var height = 120;" - criada fora da função
  }
}

menu3.metadeHeight(); // 25
// sem o this, seria 60

//this irá retornar o próprio objeto
console.log(menu3.metadeHeight());

/*
PROTÓTIPO E HERANÇA  

Has Own Property - verifica se temos a propriedade no objeto
O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
*/

var menu4 = { // objeto é uma função
  width: 800,
}

console.log(menu4.hasOwnProperty('width')); // true   -  Has Own Property - verifica se temos a propriedade no objeto
console.log(menu4.hasOwnProperty('height')); // false

//hasOwnProperty é um método de Object - verifica se temos a propriedade no objeto
// se usarmos .length contará quandos caracteres tem 

/*
EXERCÍCIO
*/

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var perfil = {
  nome: 'Carla',
  sobrenome: 'Hetterich Worlitz', 

  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }   
};
console.log(perfil);

// Crie um método no objeto anterior, que mostre o seu nome completo

console.log(perfil.nomeCompleto());

//ou 

perfil.nomeCompleto2 = function() {
  return `${this.nome} ${this.sobrenome}`;
}
console.log(perfil.nomeCompleto2());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = { 
  raca: 'labrador', 
  cor: 'preto', 
  idade: '10 anos', 
  
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Latir'
    } else
    return 'Nao latir';
  }
}

console.log(cachorro.latir());
console.log(cachorro.latir('homem'));

/*
TUDO É OBJETO

Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
*/

var nome1 = 'ANDré';

console.log(nome1.length); // 5 - total de caracteres da string 
console.log(nome1.charAt(1)); // 'n' - metodo () parenteses para evocar - retorna o caracter que está naquela posição
console.log(nome1.replace('ré', 'rei')); // 'Andrei'   - troca o primeiro argumento "ré" por "rei"
console.log(nome1); // 'André'   - todos esses metodos não alteram a var nome, só modificam momentaneamente 

var nomeMinusculo = nome1.toLowerCase();
console.log(nomeMinusculo); // 'andré'
//Uma string herda propriedades e métodos do construtor String()

/*
Diferençã entre  metodo e propriedade

Metodo/Função = nome.toLowerCase() - possui (), e se colocarmos sem aparecerá a sua função ex: f toLowerCase() { [native code]}

Propriedade = nome.length  - não tem (), pois é uma propriedade

*/

/*
NÚMEROS
 */

var altura = 1.8;

altura.toString(); // '1.8'  - transforma o número para string
altura.toFixed(); // '2'    - arredonda o número 

console.log(altura.toFixed());

// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos


/*
FUNÇÕES

também possuem métodos e propriedades
*/

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString(); // - toString pega toda a função e coloca dentro de uma string, como se fosse algo escrito
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

console.log(areaQuadrado.length); // .length retorna o total de argumentos/parametros da função que é  1 = (lado)
console.log(areaQuadrado); // toString

/*
ELEMENTOS DO DOM
*/

//<a class="btn">Clique</a>


var btn1 = document.querySelector('.btn1');  // 'document' é um objeto e 'querySelector()' é um mé

//querySelector seleciona um elemento/tag dentro do HTML - chamamos como em css ".btn"

btn1.classList.add('azul'); // adiciona a classe azul
console.log(btn1.innerText); // 'Clique'
btn1.addEventListener('click', function() {
  console.log('Clicou');
})

//Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

/*
OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO

Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.
*/


/*
EXERCÍCIO
*/

// nomeie 3 propriedades ou métodos de strings

var nome5 = 'Carla';

console.log(nome5.toLocaleUpperCase()); // CARLA
console.log(nome5.fixed());
console.log(nome5.length); // propriedade
console.log(nome5.slice());


// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn'); 
//btn.addEventListener
//btn.appendChild
//btn.id
//btn.innerHTML
//btn.outerHTML
console.log(btn);

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field            
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
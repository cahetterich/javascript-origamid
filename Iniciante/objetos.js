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

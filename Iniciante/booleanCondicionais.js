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
// if(!!' ') // true
// if(!!'') // false

//obs: podemos utilizar o !! para verificar se uma expressão é truthy ou falsy
var possuiGraduacao1 = true;

if(!possuiGraduacao1) {
    console.log(possuiGraduacao1);
    console.log('Não possui graduação');
}

/*
SWITCH
 */
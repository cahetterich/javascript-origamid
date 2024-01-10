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
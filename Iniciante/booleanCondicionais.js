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



/*
SWITCH
 */
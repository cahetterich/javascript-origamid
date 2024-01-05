/* 
1 - Sintaxe Básica
*/

const nome = "Carla";


function somar(a, b) { //função
    return a + b;
}

somar(2, 4); //retorna a soma de a + b
//O resultado é 6

/* 
2 - Sintaxe Básica
*/
        //document = chama no html
const btn = document.querySelector('.btn'); // função que dá ação em um botão/btn

btn.addEventListener('click', function() { //adicionamos um evento (addEventListener)
    btn.classList.add('ativo'); // quando a pessoa clicar no botão 'ativa' ele
});
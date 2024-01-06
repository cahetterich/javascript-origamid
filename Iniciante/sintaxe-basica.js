/* 
Primeira Sintaxe Básica
*/

const nome = "Carla";


function somar(a, b) { //função
    return a + b;
}

somar(2, 4); //retorna a soma de a + b
//O resultado é 6

/* 
Segunda Sintaxe Básica
*/
        //document = chama no html
const btn = document.querySelector('.btn'); // função que dá ação em um botão/btn

btn.addEventListener('click', function() { //adicionamos um evento (addEventListener)
    btn.classList.add('ativo'); // quando a pessoa clicar no botão 'ativa' ele (muda de cor atráves do css)
});

/* 
VARIÁVEIS
*/
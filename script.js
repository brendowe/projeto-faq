/*b1.addEventListener('click', function () {
    p1.style.display = 'block';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';  

    extra1.src = "assets/images/icon-minus.svg";
    extra2.src = "assets/images/icon-plus.svg";
    extra3.src = "assets/images/icon-plus.svg";
    extra4.src = "assets/images/icon-plus.svg";
})

b2.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'block';
    p3.style.display = 'none';
    p4.style.display = 'none';

    extra1.src = "assets/images/icon-plus.svg";
    extra2.src = "assets/images/icon-minus.svg"
    extra3.src = "assets/images/icon-plus.svg";
    extra4.src = "assets/images/icon-plus.svg";
})

b3.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'block';
    p4.style.display = 'none';

    extra1.src = "assets/images/icon-plus.svg";
    extra2.src = "assets/images/icon-plus.svg";
    extra3.src = "assets/images/icon-minus.svg"
    extra4.src = "assets/images/icon-plus.svg";
    
})

b4.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'block';

    extra1.src = "assets/images/icon-plus.svg";
    extra2.src = "assets/images/icon-plus.svg";
    extra3.src = "assets/images/icon-plus.svg";
    extra4.src = "assets/images/icon-minus.svg";
})

function trocarIcone() {
    if(extra1.src = "assets/images/icon-plus.svg") {
        extra1.src = "assets/images/icon-minus.svg";
    } else {
        extra1.src = "assets/images/icon-plus.svg"
    }
}

const botoes = document.querySelectorAll('.botao');
*/


/*

const buttons = document.querySelectorAll('button');
const paragraphs = document.querySelectorAll('p');

for (const elem of buttons) {
    elem.addEventListener('click', function() {
        for (const item of paragraphs) {
            item.style.display = 'none';
        };

        for (const item of buttons) {
            item.firstElementChild.src = "assets/images/icon-plus.svg";
        };

        elem.parentElement.nextElementSibling.style.display = 'block';
        elem.firstElementChild.src = "assets/images/icon-minus.svg";
    });
};

*/

/*const botoes = document.querySelectorAll('button'); //Armazei todos os botões aqui
const para = document.querySelectorAll('p');        // Armazenei todos os paragrafos aqui


for (const item of botoes) { // Aqui eu criei um for of que percorre os botões. Cada elemento item será o próprio botão.
    item.addEventListener('click', function() { // Adicionei um evento para o item, a cada click ele irá invocar uma função.
        for (const elemento of para) { // A função invocada irá puxar outro for of, dessa vez será um item chamado elemento que será os próprios paragrafos.
            elemento.style.display = 'none'; // Cada paragrafo percorrido ficará com o style "none", ou seja, não será exibido.
        }

        for (const item of botoes) { // Ainda dentro do da função do EventListener eu crio outro for of. Esse eu irei utilizar para alterar o ícone de mais ou menos.
            // Depois de percorrer o elemento item em botões, eu faço com que cada botão que foi clicado mude de icone.
            item.firstElementChild.src = "assets/images/icon-plus.svg"; // Aqui foi utilizado o "firstElementChild, já que dentro do botão só tem a tag img.
            //O primeiro elemento tem o seu source alterado para outro icone.
                                                                    
        }

        if(item.parentElement.nextElementSibling.style.display == 'none') {
            item.parentElement.nextElementSibling.style.display = 'block';
        } else {
            item.parentElement.nextElementSibling.style.display = 'none';
        }
        
        item.firstElementChild.src = "assets/images/icon-minus.svg";
    })
}*/


const botoes = document.querySelectorAll('button');
const para = document.querySelectorAll('p');


for (const item of botoes) {
    item.addEventListener('click', function () {

        if (item.parentElement.nextElementSibling.style.display == 'block') {
            item.parentElement.nextElementSibling.style.display = 'none';
            item.firstElementChild.src = "assets/images/icon-plus.svg";
        } else {
            for (const item of para) {
                item.style.display = 'none';
            }

            for (const item of botoes) {
                item.firstElementChild.src = "assets/images/icon-plus.svg";
            }

            item.parentElement.nextElementSibling.style.display = 'block';
            item.firstElementChild.src = "assets/images/icon-minus.svg";
        }


    })
};
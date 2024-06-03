b1.addEventListener('click', function () {
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


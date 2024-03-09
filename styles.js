const secondButtonBurguertLine = document.getElementById('button-second-line');
const thirdButtonBurguerLine = document.getElementById('button-third-line');
const buttonBurguer = document.getElementById('button-burguer');
const navbarMenu = document.querySelector('#navbar-menu');

function modifySecondLine(){
    secondButtonBurguertLine.classList.toggle('button-second-line-change');
    thirdButtonBurguerLine.classList.toggle('button-third-line-change');
    navbarMenu.classList.toggle('navbar-menu-movement');
}

buttonBurguer.addEventListener('click',modifySecondLine);
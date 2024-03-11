// boton de hamburguesa

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

// carousel head y función para los botones

const  mainPortrait = document.querySelector(".main-portrait");
const stylesMainPortraitWidth = window.getComputedStyle(mainPortrait).width;
let numberPattern = /\d+/;
let DetectPattern = stylesMainPortraitWidth.match(numberPattern);
let DetectPatternNumber = parseInt(DetectPattern[0]);
console.log(DetectPatternNumber);

function detectScrollMainPortrait(){
    console.log('horizontal ' + mainPortrait.scrollLeft);
    const firstButton = document.querySelector('#first-button');
    const secondButton = document.querySelector('#second-button');
    const thirdButton = document.querySelector('#third-button');
    const fourthButton = document.querySelector('#fourth-button');

    if(mainPortrait.scrollLeft < 10){
        firstButton.classList.remove('white-button');
        firstButton.classList.add('blue-button');

        secondButton.classList.remove('blue-button');
        secondButton.classList.add('white-button');

        thirdButton.classList.remove('blue-button');
        thirdButton.classList.add('white-button');

        fourthButton.classList.remove('blue-button');
        fourthButton.classList.add('white-button');
    }
    else if(mainPortrait.scrollLeft > DetectPatternNumber && mainPortrait.scrollLeft < DetectPatternNumber + 20){    
        secondButton.classList.remove('white-button');
        secondButton.classList.add('blue-button');

        firstButton.classList.remove('blue-button');
        firstButton.classList.add('white-button'); 
        
        thirdButton.classList.remove('blue-button');
        thirdButton.classList.add('white-button');
    }
    else if(mainPortrait.scrollLeft > DetectPatternNumber*2 && mainPortrait.scrollLeft < [(DetectPatternNumber + 20)*2]){
        thirdButton.classList.remove('white-button');
        thirdButton.classList.add('blue-button');

        secondButton.classList.remove('blue-button');
        secondButton.classList.add('white-button');
        
        fourthButton.classList.remove('blue-button');
        fourthButton.classList.add('white-button');
    }
    else if(mainPortrait.scrollLeft === DetectPatternNumber*3){
        fourthButton.classList.remove('white-button');
        fourthButton.classList.add('blue-button');
         
        thirdButton.classList.remove('blue-button');
        thirdButton.classList.add('white-button');
    }
} 










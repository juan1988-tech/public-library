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

// funciones para el carrusel de la etiqueta main-portrait

const  mainPortrait = document.querySelector(".main-portrait");
const stylesMainPortraitWidth = window.getComputedStyle(mainPortrait).width;
let numberPattern = /\d+/;
let DetectPattern = stylesMainPortraitWidth.match(numberPattern);
let DetectPatternNumber = parseInt(DetectPattern[0]);
console.log(DetectPatternNumber);

const firstButton = document.querySelector('#first-button');
const secondButton = document.querySelector('#second-button');
const thirdButton = document.querySelector('#third-button');
const fourthButton = document.querySelector('#fourth-button');

 /*funciones de cambio de color de los botones de carrrusel*/ 

const ButtonChange = (firstClassRemove,
    firstClassAdd,
    secondClassRemove,
    secondClassAdd,
    thirdClassRemove,
    thirdClassAdd,
    fourthClassRemove,
    fourthClassAdd) =>{
    //cambios de estilo al primer boton
    firstButton.classList.remove(firstClassRemove);
    firstButton.classList.add(firstClassAdd);

    //cambios de estilo al segundo boton
   secondButton.classList.remove(secondClassRemove);
   secondButton.classList.add(secondClassAdd); 

   //cambios de estilo al tercer boton
    thirdButton.classList.remove(thirdClassRemove);
    thirdButton.classList.add(thirdClassAdd);

    //cambios de estilo al cuarto
    fourthButton.classList.remove(fourthClassRemove);
    fourthButton.classList.add(fourthClassAdd);
}

function detectScrollMainPortrait(){
    if(mainPortrait.scrollLeft < 30){ 
       ButtonChange('white-button','blue-button','blue-button','white-button','blue-button','white-button','blue-button','white-button');
    }
    else if(mainPortrait.scrollLeft > DetectPatternNumber && mainPortrait.scrollLeft < DetectPatternNumber + 30){
       ButtonChange('blue-button','white-button','white-button','blue-button','blue-button','white-button','blue-button','white-button');    
    }
    else if(mainPortrait.scrollLeft > DetectPatternNumber*2 && mainPortrait.scrollLeft < [(DetectPatternNumber + 30)*2]){
        ButtonChange('blue-button','white-button','blue-button','white-button','white-button','blue-button','blue-button','white-button');
    }
    else if(mainPortrait.scrollLeft === DetectPatternNumber*3){
        ButtonChange('blue-button','white-button','blue-button','white-button','blue-button','white-button','white-button','blue-button');
    }
} 

const PhotoScrollLeft = (number,
    firstClassRemove,
    firstClassAdd,
    secondClassRemove,
    secondClassAdd,
    thirdClassRemove,
    thirdClassAdd,
    fourthClassRemove,
    fourthClassAdd) =>{
    mainPortrait.scrollLeft = number;
    ButtonChange(firstClassRemove,
        firstClassAdd,
        secondClassRemove,
        secondClassAdd,
        thirdClassRemove,
        thirdClassAdd,
        fourthClassRemove,
        fourthClassAdd)
}
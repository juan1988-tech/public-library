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

// funciones para el carrusel de la etiqueta main-portrait, y sección talleres

const  mainPortrait = document.querySelector(".main-portrait");
const stylesMainPortraitWidth = window.getComputedStyle(mainPortrait).width;

const workshopSlidebar = document.querySelector(".workshop-slidebar");
const workshopSlidebarWidth = window.getComputedStyle(workshopSlidebar).width;

let numberPattern = /\d+/;

let DetectPatternMainPortrait = stylesMainPortraitWidth.match(numberPattern);
let DetectPatternNumberMainPortrait = parseInt(DetectPatternMainPortrait[0]);
console.log(DetectPatternNumberMainPortrait);

const firstButtonMain = document.querySelector('#first-button-main');
const secondButtonMain = document.querySelector('#second-button-main');
const thirdButtonMain = document.querySelector('#third-button-main');
const fourthButtonMain = document.querySelector('#fourth-button-main');

const firstButtonWorkshop = document.querySelector('#first-button-workshop');
const secondButtonWorkshop = document.querySelector('#second-button-workshop');
const thirdButtonWorkshop = document.querySelector('#third-button-workshop');
const fourthButtonWorkshop = document.querySelector('#fourth-button-workshop');

let DetectPatternWorkshop = workshopSlidebarWidth.match(numberPattern);
let DetectPatternNumberWorkshop = parseInt(DetectPatternWorkshop[0]); 
console.log(DetectPatternNumberWorkshop);

 /*funciones de cambio de color de los botones de carrrusel*/ 

const ButtonChange = (
    firstButton,
    secondButton,
    thirdButton,
    fourthButton,
    firstClassRemove,
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

function detectScrollMainPortrait(slide,firstButton,secondButton,thirdButton,fourthButton){
    if(slide.scrollLeft < 30){ 
       ButtonChange(firstButton,secondButton,thirdButton,fourthButton,'white-button','blue-button','blue-button','white-button','blue-button','white-button','blue-button','white-button');
    }
    else if(slide.scrollLeft > DetectPatternNumberMainPortrait && slide.scrollLeft < DetectPatternNumberMainPortrait + 30){
       ButtonChange(firstButton,secondButton,thirdButton,fourthButton,'blue-button','white-button','white-button','blue-button','blue-button','white-button','blue-button','white-button');    
    }
    else if(slide.scrollLeft > DetectPatternNumberMainPortrait*2 && slide.scrollLeft < [(DetectPatternNumberMainPortrait + 30)*2]){
        ButtonChange(firstButton,secondButton,thirdButton,fourthButton,'blue-button','white-button','blue-button','white-button','white-button','blue-button','blue-button','white-button');
    }
    else if(slide.scrollLeft === DetectPatternNumberMainPortrait*3){
        ButtonChange(firstButton,secondButton,thirdButton,fourthButton,'blue-button','white-button','blue-button','white-button','blue-button','white-button','white-button','blue-button');
    }
}

const PhotoScrollLeftMain = (
    number,
    firstClassRemove,
    firstClassAdd,
    secondClassRemove,
    secondClassAdd,
    thirdClassRemove,
    thirdClassAdd,
    fourthClassRemove,
    fourthClassAdd,
    slide) =>{
    slide.scrollLeft = number;
    ButtonChange(
    firstButtonMain,
    secondButtonMain,
    thirdButtonMain,
    fourthButtonMain,    
    firstClassRemove,
    firstClassAdd,
    secondClassRemove,
    secondClassAdd,
    thirdClassRemove,
    thirdClassAdd,
    fourthClassRemove,
    fourthClassAdd)
}

const PhotoScrollLeftWorkshop = (
    number,
    firstClassRemove,
    firstClassAdd,
    secondClassRemove,
    secondClassAdd,
    thirdClassRemove,
    thirdClassAdd,
    fourthClassRemove,
    fourthClassAdd,
    slide) =>{
    slide.scrollLeft = number;
    ButtonChange(
    firstButtonWorkshop,
    secondButtonWorkshop,
    thirdButtonWorkshop,
    fourthButtonWorkshop,    
    firstClassRemove,
    firstClassAdd,
    secondClassRemove,
    secondClassAdd,
    thirdClassRemove,
    thirdClassAdd,
    fourthClassRemove,
    fourthClassAdd)
}


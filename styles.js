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

// funciones para el carrusel de la etiqueta main-portrait, y sección talleres e inglés

//main-portrait
const  mainPortrait = document.querySelector(".main-portrait");
const stylesMainPortraitWidth = window.getComputedStyle(mainPortrait).width;

const firstButtonMain = document.querySelector('#first-button-main');
const secondButtonMain = document.querySelector('#second-button-main');
const thirdButtonMain = document.querySelector('#third-button-main');
const fourthButtonMain = document.querySelector('#fourth-button-main');

const firstPictureWidthMain = document.querySelector('#first-picture-main').clientWidth;
const secondPictureWidthMain = document.querySelector('#second-picture-main').clientWidth;
const thirdPictureWidthMain = document.querySelector('#third-picture-main').clientWidth;
const fourthPictureWidthMain = document.querySelector('#fourth-picture-main').clientWidth; 

//workshop: club literario

const workshopSlidebar = document.querySelector(".workshop-slidebar");
const workshopSlidebarWidth = window.getComputedStyle(workshopSlidebar).width;

const firstButtonWorkshop = document.querySelector('#first-button-workshop');
const secondButtonWorkshop = document.querySelector('#second-button-workshop');
const thirdButtonWorkshop = document.querySelector('#third-button-workshop');
const fourthButtonWorkshop = document.querySelector('#fourth-button-workshop');

const firstPictureWidthWorkshop = document.querySelector('#first-picture-workshop').clientWidth;
const secondPictureWidthWorkshop = document.querySelector('#second-picture-workshop').clientWidth;
const thirdPictureWidthWorkshop = document.querySelector('#third-picture-workshop').clientWidth;
const fourthPictureWidthWorkshop = document.querySelector('#fourth-picture-workshop').clientWidth;

//workshop inglés

const englishSlidebar = document.querySelector(".english-slidebar");
const englishSlidebarWidth = window.getComputedStyle(englishSlidebar).width;

const firstButtonEnglish = document.querySelector('#first-button-english');
const secondButtonEnglish = document.querySelector('#second-button-english');
const thirdButtonEnglish = document.querySelector('#third-button-english');
const fourthButtonEnglish = document.querySelector('#fourth-button-english');

const firstPictureWidthEnglish = document.querySelector('#first-picture-english').clientWidth;
const secondPictureWidthEnglish = document.querySelector('#second-picture-english').clientWidth;
const thirdPictureWidthEnglish = document.querySelector('#third-picture-english').clientWidth;
const fourthPictureWidthEnglish = document.querySelector('#fourth-picture-english').clientWidth;

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

/*funcion de scrollear slider*/

function detectScrollMainPortrait(slide,firstButton,secondButton,thirdButton,fourthButton,
    firstPicture,secondPicture,thirdPicture,fourthPicture){
    if(slide.scrollLeft > 0 && slide.scrollLeft < firstPicture){ 
       ButtonChange(firstButton,secondButton,thirdButton,fourthButton,
        'white-button','blue-button','blue-button','white-button','blue-button','white-button','blue-button','white-button');
    }
    else if(slide.scrollLeft > firstPicture && slide.scrollLeft < (firstPicture+secondPicture)){
       ButtonChange(firstButton,secondButton,thirdButton,fourthButton,
        'blue-button','white-button','white-button','blue-button','blue-button','white-button','blue-button','white-button');    
    }
    else if(slide.scrollLeft >(firstPicture+secondPicture) && slide.scrollLeft < (firstPicture+secondPicture+thirdPicture)){
        ButtonChange(firstButton,secondButton,thirdButton,fourthButton,
        'blue-button','white-button','blue-button','white-button','white-button','blue-button','blue-button','white-button');
    }
    else if(slide.scrollLeft >=(firstPicture+secondPicture+thirdPicture)){
        ButtonChange(firstButton,secondButton,thirdButton,fourthButton,
        'blue-button','white-button','blue-button','white-button','blue-button','white-button','white-button','blue-button');
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

const PhotoScrollLeftEnglish = (
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
    firstButtonEnglish,
    secondButtonEnglish,
    thirdButtonEnglish,
    fourthButtonEnglish,    
    firstClassRemove,
    firstClassAdd,
    secondClassRemove,
    secondClassAdd,
    thirdClassRemove,
    thirdClassAdd,
    fourthClassRemove,
    fourthClassAdd)
}

//variables de formulario

const formContainerButton = document.querySelector('.form-container-button');

function stopEvent(e){
    e.preventDefault()
}


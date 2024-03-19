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

const firstButtonEnglish = document.querySelector('#first-button-english');
const secondButtonEnglish = document.querySelector('#second-button-english');
const thirdButtonEnglish = document.querySelector('#third-button-english');
const fourthButtonEnglish = document.querySelector('#fourth-button-english');

const firstPictureWidthEnglish = document.querySelector('#first-picture-english').clientWidth;
const secondPictureWidthEnglish = document.querySelector('#second-picture-english').clientWidth;
const thirdPictureWidthEnglish = document.querySelector('#third-picture-english').clientWidth;
const fourthPictureWidthEnglish = document.querySelector('#fourth-picture-english').clientWidth;

//funciones de botones
function firstButtonSlide(slide,slideX,firstButton,secondButton){
  slide.scrollTo(slideX,0)
  firstButton.style.backgroundColor = "var(--blue-burguer-button)";
  firstButton.style.transform = "scale(1.1)";
  firstButton.style.border =   "1px solid var(--light-gray-bg-color)";

  secondButton.style.backgroundColor = "var(--light-gray-bg-color)"
}

function secondButtonSlide(slide,slideX,firstButton,secondButton,thirdButton){
  slide.scrollTo(slideX,0)
  secondButton.style.backgroundColor = "var(--blue-burguer-button)";
  secondButton.style.transform = "scale(1.1)";
  secondButton.style.border =   "1px solid var(--light-gray-bg-color)";

  firstButton.style.backgroundColor = "var(--light-gray-bg-color)";
}

function thirdButtonSlide(slide,slideX,secondButton,thirdButton,fourthButton){
    slide.scrollTo(slideX,0)
    secondButton.classList.replace('blue-button','white-button')
    thirdButton.classList.replace('white-button','blue-button') 
    fourthButton.classList.replace('blue-button','white-button') 
}

function fourhtButtonSlide(slide,slideX,thirdButton,fourthButton){
    slide.scrollTo(slideX,0)
    thirdButton.classList.replace('blue-button','white-button') 
    fourthButton.classList.replace('white-button','blue-button')
}

function scrollVarRight(){
    if(mainPortrait.scrollLeft === 0 && mainPortrait.scrollLeft < firstPictureWidthMain){
    mainPortrait.scrollTo(firstPictureWidthMain,0)
    secondButtonMain.style.backgroundColor = "var(--blue-burguer-button)";
    secondButtonMain.style.transform = "scale(1.1)";
    secondButtonMain.style.border =   "1px solid var(--light-gray-bg-color)";
    
    firstButtonMain.style.backgroundColor = "var(--light-gray-bg-color)";  
    }
    else if(mainPortrait.scrollLeft === firstPictureWidthMain){
    mainPortrait.scrollTo(firstPictureWidthMain+secondPictureWidthMain,0);    
    thirdButtonMain.style.backgroundColor = "var(--blue-burguer-button)";
    thirdButtonMain.style.transform = "scale(1.1)";
    thirdButtonMain.style.border =   "1px solid var(--light-gray-bg-color)";
    
    secondButtonMain.style.backgroundColor = "var(--light-gray-bg-color)";
    }
    else if(mainPortrait.scrollLeft === firstPictureWidthMain+secondPictureWidthMain){
    mainPortrait.scrollTo(firstPictureWidthMain+secondPictureWidthMain+thirdPictureWidthMain,0);
    fourthButtonMain.style.backgroundColor = "var(--blue-burguer-button)";
    fourthButtonMain.style.transform = "scale(1.1)";
    fourthButtonMain.style.border =   "1px solid var(--light-gray-bg-color)";

    thirdButtonMain.style.backgroundColor = "var(--light-gray-bg-color)";    
    }
}


function scrollVarLeft(){
    if(mainPortrait.scrollLeft === firstPictureWidthMain+secondPictureWidthMain+thirdPictureWidthMain){
    mainPortrait.scrollTo(firstPictureWidthMain+secondPictureWidthMain,0);    
    thirdButtonMain.style.backgroundColor = "var(--blue-burguer-button)";
    thirdButtonMain.style.transform = "scale(1.1)";
    thirdButtonMain.style.border =   "1px solid var(--light-gray-bg-color)";
        
    fourthButtonMain.style.backgroundColor = "var(--light-gray-bg-color)";   
    }
    else if(mainPortrait.scrollLeft === firstPictureWidthMain+secondPictureWidthMain){
    mainPortrait.scrollTo(firstPictureWidthMain,0);    
    secondButtonMain.style.backgroundColor = "var(--blue-burguer-button)";
    secondButtonMain.style.transform = "scale(1.1)";
    secondButtonMain.style.border =   "1px solid var(--light-gray-bg-color)";
    
    thirdButtonMain.style.backgroundColor = "var(--light-gray-bg-color)";
    }
    else if(mainPortrait.scrollLeft === firstPictureWidthMain){
    mainPortrait.scrollTo(0,0);    
    firstButtonMain.style.backgroundColor = "var(--blue-burguer-button)";
    firstButtonMain.style.transform = "scale(1.1)";
    firstButtonMain.style.border =   "1px solid var(--light-gray-bg-color)";
        
    secondButtonMain.style.backgroundColor = "var(--light-gray-bg-color)";
    }
}



function detectScrollMainPortrait(slide,firstButton,secondButton,thirdButton,fourthButton,
    firstPicture,secondPicture,thirdPicture){
    if(slide.scrollLeft === 0 && slide.scrollLeft < firstPicture){ 
     firstButton.classList.replace('white-button','blue-button')
     secondButton.classList.replace('blue-button','white-button')
    }
    else if(slide.scrollLeft > firstPicture && slide.scrollLeft < (firstPicture+secondPicture)){
     firstButton.classList.replace('blue-button','white-button')   
     secondButton.classList.replace('white-button','blue-button')
     thirdButton.classList.replace('blue-button','white-button')     
    }
    else if(slide.scrollLeft >(firstPicture+secondPicture) && slide.scrollLeft < (firstPicture+secondPicture+thirdPicture)){
     secondButton.classList.replace('blue-button','white-button')
     thirdButton.classList.replace('white-button','blue-button') 
     fourthButton.classList.replace('blue-button','white-button')   
    }
    else if(slide.scrollLeft === firstPicture+secondPicture+thirdPicture){
    thirdButton.classList.replace('blue-button','white-button')
    fourthButton.classList.replace('white-button','blue-button')
    }
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

/*funcion scrollear con barras laterales */





       

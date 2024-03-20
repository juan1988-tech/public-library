// boton de hamburguesa

//botones de hamburguesa para el index.html
const secondButtonLineIndex = document.getElementById('button-second-line');
const thirdButtonLineIndex = document.getElementById('button-third-line');
const buttonBurguerIndex = document.getElementById('button-burguer');
const navbarMenuIndex = document.querySelector('#navbar-menu');

//botones de hamburguesa para el cathalog.html
const secondButtonLineCathalog = document.getElementById('button-second-line-cat');
const thirdButtonLineCathalog = document.getElementById('button-third-line-cat');
const buttonBurguerCathalog = document.getElementById('button-burguer-cat');
const navbarMenuCathalog = document.querySelector('#navbar-menu-cat');

function modifySecondLine(secondButtonLine,thirdButtonLine,navbarMenu){
    secondButtonLine.classList.toggle('button-second-line-change');
    thirdButtonLine.classList.toggle('button-third-line-change');
    navbarMenu.classList.toggle('navbar-menu-movement');
}

// funciones para el carrusel de la etiqueta main-portrait, y sección talleres e inglés

//main-portrait
const  mainPortrait = document.querySelector(".main-portrait");

const firstButtonMain = document.querySelector('#first-button-main');
const secondButtonMain = document.querySelector('#second-button-main');
const thirdButtonMain = document.querySelector('#third-button-main');
const fourthButtonMain = document.querySelector('#fourth-button-main');

const firstPictureWidthMain = document.querySelector('#first-picture-main').clientWidth;
console.log(firstPictureWidthMain);
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

function scrollVarRight(slide,firstPictureWidth,secondPictureWidth,thirdPictureWidth,
    firstButton,secondButton,thirdButton,fourthButton){
    if(slide.scrollLeft === 0 && slide.scrollLeft < firstPictureWidth){
    slide.scrollTo(firstPictureWidth,0)
    secondButton.style.backgroundColor = "var(--blue-burguer-button)";
    secondButton.style.transform = "scale(1.1)";
    secondButton.style.border = "1px solid var(--light-gray-bg-color)";
    
    firstButton.style.backgroundColor = "var(--light-gray-bg-color)";  
    }
    else if(slide.scrollLeft === firstPictureWidth){
    slide.scrollTo(firstPictureWidth+secondPictureWidth,0);    
    thirdButton.style.backgroundColor = "var(--blue-burguer-button)";
    thirdButton.style.transform = "scale(1.1)";
    thirdButton.style.border =   "1px solid var(--light-gray-bg-color)";
    
    secondButton.style.backgroundColor = "var(--light-gray-bg-color)";
    }
    else if(slide.scrollLeft === firstPictureWidth+secondPictureWidth){
    slide.scrollTo(firstPictureWidth+secondPictureWidth+thirdPictureWidth,0);
    fourthButton.style.backgroundColor = "var(--blue-burguer-button)";
    fourthButton.style.transform = "scale(1.1)";
    fourthButton.style.border =   "1px solid var(--light-gray-bg-color)";

    thirdButton.style.backgroundColor = "var(--light-gray-bg-color)";    
    }
}

function scrollVarLeft(slide,firstPictureWidth,secondPictureWidth,thirdPictureWidth,
    firstButton,secondButton,thirdButton,fourthButton){
    if(slide.scrollLeft === firstPictureWidth+secondPictureWidth+thirdPictureWidth){
    slide.scrollTo(firstPictureWidth+secondPictureWidth,0);    
    thirdButton.style.backgroundColor = "var(--blue-burguer-button)";
    thirdButton.style.transform = "scale(1.1)";
    thirdButton.style.border =   "1px solid var(--light-gray-bg-color)";
        
    fourthButton.style.backgroundColor = "var(--light-gray-bg-color)";   
    }
    else if(slide.scrollLeft === firstPictureWidth+secondPictureWidth){
    slide.scrollTo(firstPictureWidth,0);    
    secondButton.style.backgroundColor = "var(--blue-burguer-button)";
    secondButton.style.transform = "scale(1.1)";
    secondButton.style.border =   "1px solid var(--light-gray-bg-color)";
    
    thirdButton.style.backgroundColor = "var(--light-gray-bg-color)";
    }
    else if(slide.scrollLeft === firstPictureWidth){
    slide.scrollTo(0,0);    
    firstButton.style.backgroundColor = "var(--blue-burguer-button)";
    firstButton.style.transform = "scale(1.1)";
    firstButton.style.border =   "1px solid var(--light-gray-bg-color)";
        
    secondButton.style.backgroundColor = "var(--light-gray-bg-color)";
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

//variables de formulario

const formContainerButton = document.querySelector('.form-container-button');

function stopEvent(e){
    e.preventDefault()
}

/*funcion scrollear con barras laterales */





       

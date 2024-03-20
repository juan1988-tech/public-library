// primer objeto

/* let book = {
    id: 2,
    genre: 'oconomía',
    author: 'Joseph Stitfitz',
    year: 2018,
    editorial: 'Sanlana Editores',
    typeBook: 'libro de economia',
    state:{
        available: true,
        loaned: false    
    },
    //funciones con respecto a los nodos
    //cathalog-main
    cathalogMainNode: document.querySelector('.cathalog-main'),
    
    //cathalog-main-book al final irá al nodo al cual se añade
    cathalogMainBookNode: document.createElement('section'),
    cathalogMainBookClass: function(){
        this.cathalogMainBookNode.classList = "cathalog-main-book";
    } 
} */

class MainBook{
    constructor(id,nameBook,genre,author,year,editorial,typeBook,state,stateBook){
        this.id = id;
        this.nameBook = nameBook;
        this.genre = genre;
        this.author = author;
        this.year = year;
        this.editorial = editorial;
        this.typeBook = typeBook;
        this.state = state;
        this.stateBook = stateBook;     
    }
    //funcion para si el libro está en préstamo o disponible
    changeStateBook(){
        if(this.state === true){
            this.stateBook = 'Disponible';
            return  this.stateBook;
        }
        else{
            this.stateBook = "En préstamo";
            return this.stateBook;
        }
    }
    
}

const firstBook = new MainBook(1,'Caída Libre','Economía','Joseph Stiglitz',2008,
'Santillana Ediciones Generales','libro de tapa dura',true,'');

const secondBook = new MainBook(2,'Inteligencia Emocional','Psicoogía','Daniel Coleman',2018,
'Penguin Ranom Editorial','texto de divulgacion científica',false,'')



//cathalog-main
const cathalogMain = document.querySelector('.cathalog-main');

//cathalog-main-book al final irá al nodo al cual se añade
const cathalogMainBook = document.createElement('section');
cathalogMainBook.classList = "cathalog-main-book";
cathalogMain.appendChild(cathalogMainBook); 

//cathalog-main-grid
const cathalogMainGrid = document.createElement('section');
cathalogMainGrid.classList = "cathalog-main-grid";
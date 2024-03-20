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
'Santillana Ediciones Generales','libro de tapa dura',true);
console.log(firstBook);





//cathalog-main
const cathalogMain = document.querySelector('.cathalog-main');

//cathalog-main-book al final irá al nodo al cual se añade
const cathalogMainBook = document.createElement('section');
cathalogMainBook.classList = "cathalog-main-book";
cathalogMain.appendChild(cathalogMainBook); 

//cathalog-main-grid
const cathalogMainGrid = document.createElement('section');
cathalogMainGrid.classList = "cathalog-main-grid";
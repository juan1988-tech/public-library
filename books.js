class MainBook{
    constructor(id,nameBook,genre,author,year,editorial,typeBook,state,stateBook,available,loaned){
        this.id = id;
        this.nameBook = nameBook;
        this.genre = genre;
        this.author = author;
        this.year = year;
        this.editorial = editorial;
        this.typeBook = typeBook;
        this.state = state;
        this.stateBook = stateBook;
        this.available = available;
        this.loaned = loaned;
        //nodos
        this.catalogMain = document.querySelector('.cathalog-main');
        this.cathalogMainBook = document.createElement('section');
        this.cathalogMainGrid = document.createElement('section');
        this.mainId = document.createElement('article');
        this.cathalogBookTitle = document.createElement('h1');
        this.genreNode = document.createElement('p');
        this.genreDescription = document.createElement('p');
        this.authorNode = document.createElement('p');
        this.authorDescription = document.createElement('p');
        this.yearNode = document.createElement('p');
        this.yearDescription = document.createElement('p');
        this.editorialNode = document.createElement('p');
        this.editorialDescription = document.createElement('p');
        this.typeBookNode = document.createElement('p');
        this.typeBookDescription = document.createElement('p');
        this.cathalogState = document.createElement('article');
        this.bookAvailable = document.createElement('p');
        this.bookLoaned = document.createElement('p');

        if(this.state === true){
            this.stateBook = 'Disponible';
            return  this.stateBook;
        }
        else{
            this.stateBook = "En préstamo";
            return this.stateBook;
         }
    }
   
    // crear el nodo de la información del libro
    get createNodes(){
        //funcionnes para añadir los nodos a la sección de cada libro en order del DOM
        this.createMainGrid();
        this.createMainId();
        this.createBookTitle();
        this.createGenre();
        this.createGenreDescription();
        this.createAuthor();
        this.createAuthorDescription();
        this.createYearNode();
        this.createYearDescription();
        this.createEditorialNode();
        this.createEditorialDescription();
        this.createTypeBookNode();
        this.createTypeBookDescription();
        this.createCathalogState();

        //funciones de clase de main book
        this.cathalogMainBook.classList = 'cathalog-main-book'; 
        this.catalogMain.appendChild(this.cathalogMainBook);

        return this.catalogMain;
    }
     //crear el nodo del Maingrid
     createMainGrid(){
        this.cathalogMainGrid.classList = 'cathalog-main-grid';
        this.cathalogMainBook.appendChild(this.cathalogMainGrid);
        return this.cathalogMainBook;
    }
    //creat el nodo de id
    createMainId(){
        this.mainId.classList = 'cathalog-main-id';
        this.mainId.append(this.id,document.createElement('h1'));
        this.cathalogMainGrid.appendChild(this.mainId);
        return this.mainId;
    }
    //crear el nodo de book title
    createBookTitle(){
        this.cathalogBookTitle.classList = 'cathalog-book-title';
        this.cathalogBookTitle.innerHTML = this.nameBook;
        this.cathalogMainGrid.appendChild(this.cathalogBookTitle);
        return this.cathalogMainGrid;
    }
    //creat el nodo del genero
    createGenre(){
        this.genreNode.classList = 'genre';
        this.genreNode.innerHTML = 'Género: ';
        this.cathalogMainGrid.appendChild(this.genreNode);
        return this.genreNode;
    }
    //crear el nodo de la descripción del genero
    createGenreDescription(){
        this.genreDescription.classList = 'genre-description';
        this.genreDescription.innerHTML = this.genre;
        this.cathalogMainGrid.appendChild(this.genreDescription);
        return this.cathalogMainGrid;
    }
    //crear el nodo del Autor
    createAuthor(){
        this.authorNode.classList = 'author';
        this.authorNode.innerHTML = 'Autor: ';
        this.cathalogMainGrid.appendChild(this.authorNode);
        return this.cathalogMainGrid; 
    }
    //crear el nodo de la descripción del Autor;
    createAuthorDescription(){
        this.authorDescription.classList = 'author-description';
        this.authorDescription.innerHTML = this.author;
        this.cathalogMainGrid.appendChild(this.authorDescription);
    }
    //crear el nodo del año
    createYearNode(){
        this.yearNode.classList = 'year';
        this.yearNode.innerHTML = 'Año: ';
        this.cathalogMainGrid.appendChild(this.yearNode);
    }
    //crear el nodo de la descripción del año
    createYearDescription(){
        this.yearDescription.classList = 'year-description';
        this.yearDescription.innerHTML = this.year;
        this.cathalogMainGrid.appendChild(this.yearDescription);
    } 
    //creat el nodo de la editorial
    createEditorialNode(){
        this.editorialNode.classList = 'editorial';
        this.editorialNode.innerHTML = 'Editorial: ';
        this.cathalogMainGrid.appendChild(this.editorialNode);
    }
    //crear el nodo de la descripción de la propiedad
    createEditorialDescription(){
        this.editorialDescription.classList = 'editorial-description';
        this.editorialDescription.innerHTML = this.editorial;
        this.cathalogMainGrid.appendChild(this.editorialDescription);
    }
    //crear el nodo del tipo de libro
    createTypeBookNode(){
        this.typeBookNode.classList = 'book-type';
        this.typeBookNode.innerHTML = 'Tipo de libro: ';
        this.cathalogMainGrid.appendChild(this.typeBookNode);
    }
    //crear el nodo de la descripción del tipo de libro
    createTypeBookDescription(){
        this.typeBookDescription.classList = 'book-type-description';
        this.typeBookDescription.innerHTML = this.typeBook;
        this.cathalogMainGrid.appendChild(this.typeBookDescription);
    }
    // Crear el nodo para el estado del libro
    createCathalogState(){
        this.cathalogState.classList = 'cathalog-state';
        //Estilos y texto para el estado disponible
        this.bookAvailable.classList = 'cathalog-available';
        this.bookAvailable.innerHTML = 'Disponible';
        this.cathalogState.appendChild(this.bookAvailable);

        //Estilos y texto para el estado en Prestamo
        this.bookLoaned.classList = 'cathalog-loaned';
        this.bookLoaned.innerHTML = 'En préstamo';
        this.cathalogState.appendChild(this.bookLoaned);

        this.cathalogMainGrid.appendChild(this.cathalogState);
    }
}
  
const firstBook = new MainBook(1,'Caída Libre','Economía','Joseph Stiglitz',2008,'Santillana Ediciones Generales','Libro de tapa dura',true);
firstBook.createNodes;

const secondBook = new MainBook(2,'Caída Libre','Economía','Joseph Stiglitz',2008,'Santillana Ediciones Generales','Libro de tapa dura',true);
secondBook.createNodes;
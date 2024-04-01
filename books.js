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
    }
    //creat el nodo de id
    createMainId(){
        this.mainId.classList = 'cathalog-main-id';
        this.mainId.append(this.id,document.createElement('h1'));
        this.cathalogMainGrid.appendChild(this.mainId);
    }
    //crear el nodo de book title
    createBookTitle(){
        this.cathalogBookTitle.classList = 'cathalog-book-title';
        this.cathalogBookTitle.innerHTML = this.nameBook;
        this.cathalogMainGrid.appendChild(this.cathalogBookTitle);
    }
    //creat el nodo del genero
    createGenre(){
        this.genreNode.classList = 'genre';
        this.genreNode.innerHTML = 'Género: ';
        this.cathalogMainGrid.appendChild(this.genreNode);
    }
    //crear el nodo de la descripción del genero
    createGenreDescription(){
        this.genreDescription.classList = 'genre-description';
        this.genreDescription.innerHTML = this.genre;
        this.cathalogMainGrid.appendChild(this.genreDescription);
    }
    //crear el nodo del Autor
    createAuthor(){
        this.authorNode.classList = 'author';
        this.authorNode.innerHTML = 'Autor: ';
        this.cathalogMainGrid.appendChild(this.authorNode);
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

      if(this.state === true){
            this.bookAvailable.style.color = 'var(--orange-digital-journal)';
            this.bookLoaned.style.color = 'var(--medium-gray-color)';
        }
    else{
            this.bookAvailable.style.color = 'var(--medium-gray-color)';
            this.bookLoaned.style.color = 'var(--blue-literature-club)'
        }

        this.cathalogMainGrid.appendChild(this.cathalogState);
        
    }
    //destruir el nodo por no coincidir con la busqueda
    get destroyMainNode(){
        this.cathalogMainBook.style.display = 'none';
    }
}
  
// array con todos los obejtos de las clases de los libros
const bookListData = [
new MainBook(1,'Caída Libre','Economía','Joseph Stiglitz',2008,'Santillana Ediciones Generales','Libro de tapa dura',true),
new MainBook(2,'Desarrollo de videojuegos','Informática','Nelson Mauricio García, Yohiner Moreno',2019,'Ra-ma Editorial','Informatica, videojuegos',false),
new MainBook(3,'Diez Razones para ser científico','Divulgación Científica','Ruy Perez Tamayo',2013,'Fondo de Cultura Economica','Biografía, Ensayo de Ciencia',true),
new MainBook(4,'Analisis Financiero Aplicado','Finanzas y Contabilidad','Hector Ortiz Anaya',2015,'Universidad Externado de Colombia','1.Administración Financiera,Analísis Financiero,NIIF',false),
new MainBook(5,'Esto lo cambia todo','Medio Ambiente','Naomi Klein',2015,'Espasa Libros S.L.U','1. Cuidado del medio Ambiente',true),
new MainBook(6,'Nueva Historia Económica de Colombia','Economía Política','Salomón Kalmanovitz',2010,'Santillana Ediciiones Generales S.L.','Economía Política, Historia Economica',false),
new MainBook(7,'La Inteligencia Emocional','Psicología','Daniel Koleman',2018,'Penguin Ranadom House Ediciones','Psicología, Salud Mental',false),
new MainBook(8,'Neuro Emotion','Ventas','Andrés Cardenas Guameri',2016,'Smart Print Artes Gráficas','Negociación y ventas',true),
new MainBook(9,'El Silmarilion','Novela de Fantasía','J.R.R. Tolkien',2012,'Editorial Planeta','Novela de Fantasía',false),
new MainBook(10,'Sanación Energetica','Sanación Interior','Stefanie Menzel',2012,'Panamericana Editorial','Energía Cosmica - Uso terapeutico',false),
new MainBook(11,'Retornamos como sombras','Novela Policial','Paco Ignacio Taibo',2002,'Editorial Planeta','Novela Policial - Realismo Mágico',false),
new MainBook(12,'Dios Creó los Números','Ciencias Naturales','Stephen Hawking',2006,'Editorial Planeta Colombia S.A.','Física - Matemáticas - Historia de las Matemáticas',true),
new MainBook(13,'Gobernabilidad Monetaria y Financiera Internacional','Finanzas y Derecho','Adriana Zapata de Arbelaez',2012,'Universidad Externado de Colombia','Derecho Financiero - Sistema Monetario Internacional',true),
new MainBook(14,'Diseño de Interfaces en aplicaciones Móviles','Programación,videojuegos','Sebastían Serna, Cesar Pardo',2017,'Ediciones de la U','1. Informática, 2. Sistemas Operativos Móvles',false),
new MainBook(15,'Electrónica Básica: Guía Práctica','Electronica','David Arboleda Brihuega',2011,'Ediciones de la U','1. Teoría de Circuito 2.Interruptores y Resistencias',true)
]

for(let i=0; i<bookListData.length;i++){
    bookListData[i].createNodes;
}

//buscador de libros con javascript

/* let missingBook = document.querySelector('#missing-book');
missingBook.style.display = "none" */

/*ceracion del nodo de no libro */
// console.log(bookListData[0].cathalogMainBook)

const searchBook = () =>{
    let cathalogSearcher = document.getElementById('cathalog-main-searcher');
    let changeCase = cathalogSearcher.value.toUpperCase();
    const catalogMainBook = document.querySelector('.cathalog-main-book');
    
   // console.log(catalogMainBook.style.display)

    let textValue;
    
    for(let i=0;i<bookListData.length;i++){
     let cathalogMainGrid = bookListData[i].cathalogMainGrid;
     let cathalogMainBook = bookListData[i].cathalogMainBook;
     let cathalogAuthor = bookListData[i].author;

      textValue = cathalogAuthor.textContent || cathalogMainGrid.innerText;
        if(textValue.toUpperCase().indexOf(changeCase) > -1){
            cathalogMainBook.style.display = "block";
            }
        else{
            cathalogMainBook.style.display = "none";  
            }
       } 
}






//buqueda automática para celulares
const searchBookCellphone = () =>{
    if(document.body.clientWidth <=768){
        let cathalogSearcher = document.getElementById('cathalog-main-searcher');
        let changeCase = cathalogSearcher.value.toUpperCase();
        let textValue;
        
        for(let i=0;i<bookListData.length;i++){
         let cathalogMainGrid = bookListData[i].cathalogMainGrid;
         let cathalogMainBook = bookListData[i].cathalogMainBook;
         let cathalogAuthor = bookListData[i].author;
    
          textValue = cathalogAuthor.textContent || cathalogMainGrid.innerText;
            if(textValue.toUpperCase().indexOf(changeCase) > -1){
                cathalogMainBook.style.display = "block";
                }
            else{
                cathalogMainBook.style.display = "none";
                }
           }
        }   
    }




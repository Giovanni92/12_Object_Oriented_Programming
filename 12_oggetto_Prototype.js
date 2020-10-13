//Vedremo come funzione l'eredità in js urtilizzando l'oggetto prototype


function Animal(name) {
    this.name = name || 'Unknown';
      this.type = 'An anmal';
        this.habitat = 'Terra';
}

var dog = new Animal('Dog');
// console.log(dog.name);   //*Dog

// //Aggiungo metodo che mi mostra nome dell'animale
//   //in js a differenza di altri linguaggi è possibile aggiungere metodi dopo che l'oggetto è stato creato
// Animal.prototype.mostraNome = function(){
//     // alert( this.name);   //darebe errore con node
//     console.log(this.name);
// }

// dog.mostraNome();   //js si chiede dog ha questa proprietà ? (mostrtaNome?)
//                       //no, perchè al momento della costruzione c'erano le prop
//                         //name, type e habitat. Allora guardo dentro il suo prototipo
//                           //qual'è il prototipo di dog? E' Animal.
//                             //se non ci fosse andrebbe a cercare nel prototipo di function
//                                 //se ancora non ci fosse,  nel prototipo di Object.
//                                     //nel caso non lo trovi, darà undefined

// console.log(dog.mangiaLaPappa); //undefined
// console.log(dog.mostraNome);  //[Function]

// console.log(dog.toString);  //[Function: toString]
// console.log(dog.toString());  //[object Object] 



//Quindi per riassumere

//Ogni volta che js va a cercare una proprietà in un oggetto va a cercare se l'oggetto ce l'ha direttamente
//esempio:
dog.legs = 4;   //prop.locale
//se dog.legs non ci fosse qua, lui andrebbe a vedere se il suo prototipo (Animal) ha questa proprietà
//se Animal non ce l'ha, arriva fino ad Object

// la prop 'legs' è locale a questo oggetto, non fa parte di quelle che lui ha ereditato,
  //quindi se io creo un altro oggetto, es.Horse

var horse = new Animal('horse');
// //nel caso non definissi la prop globale (Animal.prototype.legs = 4;) darebbe:
// console.log(horse.legs);    //*undefined, non eredita prop locale di dog

//Se io dichiaro uina prop globale nel prototipo
Animal.prototype.legs = 4;  //diventa prop predefinita del prototipo

//Se creassi un altro oggetto, spider che non ha 4 gambe
var spider = new Animal('spider');
spider.legs= 8;


console.log(horse.legs);  //  *4
console.log(dog.legs);  //*  4
console.log(spider.legs);  //* 8

//abbiamo visto come incrementare le prop di un prototipo in js, così tutti gli oggetti creati
    //con questo prototipo Animal erediteranno questa proprietà
//se voglio che un oggetto abbia una prop solo per se: nomeOggetto.proprietà o metodo (locale)






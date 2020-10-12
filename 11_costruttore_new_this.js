//Studieremo le funzioni in js usate per creare oggetti

//Dalla versione 6 di js in poi è arrivato il costrutto class.
// Nelle versioni precedenti si usava il costrutto prototipo

//  function Animal(){
//      console.log('Animal');
//        return 'Cane'
//  }

// //  console.log(typeof Animal);    //*function

//  //Qunado è che una funzione si trasforma in una specia di classe
//    //Quando io chiamo questa funzione con il costrutto 'new'

// //new : js crea un oggetto nuovo e applicagli il costruttore di Animal
//   //e ritorna questo oggetto
// var cane = new Animal();
// console.log(cane);

// //con new Animal js crea un oggetto da zero e mette dentro 
//   //il prototipo di Animal e qualunque proprietà che io metta nel costruttore dell'
//     //oggetto farà parte del nuovo oggetto che creo

// //Se ci dimentichiamo di chiamare new quello che stiamo facendo è INVOCARE la funzione e nella nostra 
//   //var ci sarà il ritorno di quella funzione e NON l'oggetto

console.log();
console.log();

//Come faccio nel costruttore ad assegnare parametri predefiniti per fli oggetti che creerò

function Animal2() {
    //this significa che questi due parametri non appartengono alla funzione, Ma all'oggetto che verrà creato
    console.log(this);  //mi dirà che this è l'oggetto 'global' con tutte le sue proprietà
    this.type = 'Animal';
    this.habitat = 'Terra';
    
}

var cagnolino = new Animal2();
// console.log(cagnolino);
// console.log(cagnolino.type);
// console.log(cagnolino.habitat);

//Per differenziare le funzioni normali da quelle costruttrici di oggetti si mette la lettera Maius

var cane = Animal2();   //quando la funzione viene chiamata, this NON crea un nuovo oggetto perchè non cè new

//non avendo istanziato un oggetto qui, this fa riferimento all'oggetto globale 
  //se io non istanzio un nuovo oggetto
console.log(habitat);
//in questo caso essendo js eseguito nel browser, l'oggetto globale sarebbe global
//habitat diventa var globale
console.log(global.habitat);



//per riassumere:
// si def la funzione, 
//le prop che nell'oggetto vogliamo siano predefinite le scriviamo con this.nomeProprieta

function Ominide(name, age) {
    this.name = name || 'non definito';
    this.type = 'Homo erectus';
    this.habitat = 'Earth';

    // var eta = age;  //eta non sarà visibile all'esterno avendo var, 
    //                   //si vede solo dentro alla funzione
    //                     //mi darà errore. Non si vedrebbe dentro l'oggetto
    //                       //creato con il costruttore di questa funzione
    this.eta = age;   //con this si vedrà dall'esterno
}

var umano = new Ominide('Otello', 87);
console.log(umano);

//quindi tutte le variabili dichiarate con var dentro alla funzione sono private a quella funzione
  // e alle figlie di quella funzione 



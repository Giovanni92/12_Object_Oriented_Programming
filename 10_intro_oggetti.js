//Oggetto: Tutto quello che non è un valore primitivo (array e funzioni sono oggetti) 
//sono contenitori di vlaori eterogenei, possono contnere altri oggetti e funzioni

//Di solito raggruppa delle proprietà e metodi per rappresentare un oggetto rewale3:
  // macchina televisore animale persona

// dichiarazione oggetto
//all'interno dell'oggetto possiamo mettere qualsiasi valore di proprieta 
  //che possa essere convertito in una stringa

var Person = {
        name : 'Omar',
        age: 30,
        single : false,
        '' : null,  //stringa vuota uguale a null come valore
        3 : 4,  //un numero puo essere convertito in una stringa, legale in un oggetto
        'birth date' : '13081991'  

};

console.log(Person);


//come accedere alle proprieta

console.log(Person.name);
console.log(Person.age);
// console.log(Person.3);  //questa notazione non la possiamo usare con la dot notation se la prop è un num
  //per risolvere questo problema:
console.log(Person[3]);
//le parentesi quadre vanno bene per qualsiasi propieta dell'oggetto
console.log(Person['single']);  //*per accedere a una prop stringa dobbiamo metterla tra apici
console.log(Person["birth date"]);

//ATTENZIONE - 
console.log('');
console.log('');

var name = '';

console.log(Person.name);
console.log(Person[name]);  //il name tra quadre richiama alla variabile qui sopra, che nell'oggetto viene associata
                                // a '': null ,  dando come valore null
console.log(Person['']);
















//creo una funzione esterna

//quando questa funzione viene chiamata, quando lui va vedere chi è this, in questo caso
  //la funzione viene chiamata nello scope dell'ambiente 'dog', quindi lui va a cercare la 
    //proprietà id dentro l'oggetto dog
function displayId(){
    console.log(this.id);
};

//Ho due modi per usare questa fuinzione
//1 - facendola ereditare all'interno dell'oggetto usando come riferimento quella esterna.


//--------------------------------------------------------------------------

var dog = {
    type : 'Dog',
    name : 'Laika',
    legs: 4,
    bark : function(){
        console.log('Dog barked');
    },

    getName : function(){
        console.log(this.name); //this punta su questo oggetto
    },

    favouriteFriends: [
        'Jonny',
        'Betty',
        'Georgie'
    ],
    id : {  //in questo caso come prop aggiungo un oggetto 
        dogId : '84168761',
        address : 'Corso dei corsi, Torino',
        country : 'Italy'
    },
    // 1 - 
    displayDogId:displayId

};

// //in questo caso abbiamo gia l'oggetto, non dobbiamno istanziarlo
// dog.bark(); //*Dog barked

// //se voglio aggiungere un altra prop a questo oggetto lo devo fare esplicitamente:

// dog.color = 'White';    //non posso usare il prototipo perchè un oggetto letterale eredita 
//                           //dall'oggetto globale Object di js
// console.log(dog.color);
// dog.favouriteFriends.push('Jimmy'); //aggiungo un amico all'array della prop
// console.log(dog.favouriteFriends);

// //accedo alle prop dell'oggetto id dentro l'oggetto dog (child object)
// console.log(dog.id.address);    //*Corso dei corsi, Torino

// dog.displayDogId();



//se chiamassi displayId() esternamente senza il riferimetno dell'oggetto, mi darebbe undefined
// displayId();    //*undefined
//perchè non troverebbe un this, cercherebbe nell'Oggetto globale e in questo non troverebbe
// la proprietà id, quindi mette undefined

// global.id = 278168; //definisco la prop del global Object id con un valore;
// displayId();    //*278168       ora che la prop id è definita nel global Object ho il valore predefinito



//Ora io posso 'rubare' il metodo getName facendone un riferimento facendo
var displayName = dog.getName;   
//mi mostra il corpo della funzione
// console.log(displayName);   //*[Function: getName]

//se la chiamo globalmente mi da undefined, perchè this non si riferisce piu' a dog ma all'Oggetto globale
  //perchè è stata chiamata al di fuori dell'oggetto dog, quindi va a finire sempre
    // nell'Oggetto globale global
// console.log(displayName());  //*undefined

// global.name ='Alian';  //Setto la prop name dell'oggetto globale come 'Alian'

// console.log(displayName()); //*Alian

var mioObject = {
    name: 'Jim'
};

displayName.call(mioObject);


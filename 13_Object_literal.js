
//Oggetti letterali

//Vediamo come creare degli oggetti usando il costruttore Object.literal 

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
    }

};

//in questo caso abbiamo gia l'oggetto, non dobbiamno istanziarlo
dog.bark(); //*Dog barked

//se voglio aggiungere un altra prop a questo oggetto lo devo fare esplicitamente:

dog.color = 'White';    //non posso usare il prototipo perchè un oggetto letterale eredita 
                          //dall'oggetto globale Object di js
console.log(dog.color);
dog.favouriteFriends.push('Jimmy'); //aggiungo un amico all'array della prop
console.log(dog.favouriteFriends);

//accedo alle prop dell'oggetto id dentro l'oggetto dog (child object)
console.log(dog.id.address);    //*Corso dei corsi, Torino


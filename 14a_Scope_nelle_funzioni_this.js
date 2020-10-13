

global.id = 4732821313;


//#1 - Questa funzione fa riferimento a un id, quindi la devo chiamare in un contesto dove ci sia la prop id
  // se la chiamassi senza un oggetto di riferimento, cercherebbe nell'Oggetto globale un id, 
    //non trovandolo, risulterebbe undefined
function displayId(){

  console.log(this.id);
}


var dog = {
    type : 'DOG',
    name :'Laika',
    legs : 4,
    bark : function(){
      console.log('Dog barked');
    },
      
    getName : function(){
       console.log(this.name);
    },
   favoriteFriends:[
        'JIMMY',
          'johny',
        'PIGGY'
   ],
   id :{
     dogId :'1212121212',
     address :' corso racconigi, Torino',
      country :' Italy'
   },

//#1 - chiamo la funzione dentro l'oggetto, facendo riferimento al puntatore mostraIdCane
   mostraIdCane:displayId

};

dog.color = 'White';


dog.mostraIdCane();
// se chiamassi solo la funzione darebbe undefined perchè nell'oggetto globale non trova la prop id
// displayId();

//Ora ho definito la var id globale con il valore di 4732821313, quindi chiamando la funzione, this
  // prende come riferimento l'id globale definita alla riga 3
//Chiamandola globalmente (da fuori) il this è uguale all'oggetto global (nel browser window)
displayId();

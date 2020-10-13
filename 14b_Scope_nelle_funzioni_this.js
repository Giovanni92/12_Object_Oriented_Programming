

global.id = 4732821313;
global.name = 'Arias';

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

   mostraIdCane:displayId

};

dog.color = 'White';


// dog.mostraIdCane();
// se chiamassi solo la funzione darebbe undefined perchè nell'oggetto globale non trova la prop id
// displayId();

//Ora ho definito la var id globale con il valore di 4732821313, quindi chiamando la funzione, this
  // prende come riferimento l'id globale definita alla riga 3
//Chiamandola globalmente (da fuori) il this è uguale all'oggetto global (nel browser window)
// displayId();

//----------------------------------------------------------------------

// //fare riferimento al metodo getName
//  var displayName = dog.getName;
// //mi mostra il corpo di questa funzione che è stata dichiarata dentro l'oggetto
//  console.log(displayName);
//  //ora invece che mostrare il corpo la invoco
//  console.log(displayName());    //*undefined


 var displayName = dog.getName;   //Laika

 //se chiamo la funzione globalmente mi dice che è uindefined
 //console.log(displayName());

 var mioOggetto = {
     name : 'Jimmy'
 }

 //se uso l'intorno dell'oggetto che ho creato per chiamare la funzione
 displayName.call(mioOggetto);  //*Jimmy

 //In js il this fa riferimento all'oggetto in cui viene eseguita quella funzione
   // se la chiamo es.(dog.getName) farà riferimento al metodo dell'oggetto dog (Laika)
   // se la chiamo individualmente farà riferimento all'oggetto window (global in node)
   // se la chiamo con il metodo call passandogli l'oggetto in cui voglio eseguire quella funzione 
     // farà riferimento a quella proprietà di quell'oggetto




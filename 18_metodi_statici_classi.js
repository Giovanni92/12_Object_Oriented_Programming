
class Enemy{

    constructor(type='Alien', lives=12) {
        this.type = type;
        this.lives = lives;
    }

    
    static getType(){
        return 'Enemy';
    }

    shout(){
        console.log('grrrrrrrrrrr!');
    }

}

class Creepers extends Enemy {

    constructor(type='Creeper', lives= 20){

        super(type, lives);
    }

    static getType(){
        return super.getType()+', Creeper';
    }

    shout(){

        console.log('zzzzzzzzzz!');
    } 
}
//questo sarebbe un metodo statico, non chiamabile quindi direttamente dall'oggetto ma Solo dalla classe
Creepers.getHealth = function(){
    return 60;
}

var creeper = new Creepers('Creeper', 60);
console.log(Creepers.getType());


// //se facessimo così lo faremmo ereditare da tutti gli oggetti
     //tutti gli oggetti che ereditano da Creepers e che sono stati creati con la fuinzione Creepers
        //avranno questo metodo 'getHealth'

//  // mentre se non lo metto nel prototipo ma lo metto direttamente nella classe gli oggetti 
      //non avranno questo metodo perchè è un metodo STATICO

// Creepers.prototype.getHealth = function(){
//     return 60;
// }
// console.log(creeper.getHealth());


//----------------------------------------------------------------------

//I metodi statici sono metodi che non appartengono alla classe dell'oggetto,
 //ma alla classe stessa.

 //non possono essere chiamati dall'oggetto ma direttamente dalla classe stessa
  //perchè altrimenti mi darebbe un errore


//Se vogliamo chiamare un metodo statico della classe parent lo dobbiamo fare dentro un 
  //metodo statico della classe figlia


  //per concludere STATICO è un metodo che APPARTIENE alla classe, NON è un metodo che si trova 
    //dentro al prototipo dell'oggetto 
  //quindi senza prototype è un metodo statico, con il prototype è un metodo che erediteranno
   // TUTTI gli oggetti della classe
  //
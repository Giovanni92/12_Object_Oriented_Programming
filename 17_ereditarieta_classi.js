
//js6 class, extends, super
//come definire una classe


// var enemy1 = new Enemy();
// console.log(enemy1.type);


// function Enemy(type='Alien', lives=12){
//         //aggiungiamo parametri che se non vengono passati hanno un valore di default
//         this.type = type;
//         this.lives = 12;
// }

//ora trasformiamo la funzione QUI SOPRA in una Classe

class Enemy{
    //per passargli i parametri costruiamo il metodo constructor con parametri di default
    //il costruttore serve a creare degli oggetti e pasargli delle proprieta
    constructor(type='Alien', lives=12) {
        this.type = type;
        this.lives = lives;
    }
    shout(){
        console.log('grrrrrrrrrrr!');
    }

}

//ATTENZIONE : a differenza delle funzioni, le classi bisogna PRIMA DEFINIRLE per poi usarle.
  // le classe non sono soggette all'HOIST delle funzioni
// var enemy1 = new Enemy();
// console.log(enemy1.type);


//Ora vediamo un esempio di ereditarietà
  //estendo proprietà di enemy su Creepers, che però avrà altre sue proprietà
class Creepers extends Enemy {

    constructor(type='Creeper', lives= 20){
        //super chiamerà il costruttore della classe padre
         //è come se chiamassi super.constructor
        // console.log(type,lives);
        super(type, lives);
    }
    //sovrascrivo metodo shout di Enemy
    shout(){
        //se volessimo richiamare dentro questo metodo il metodo della classe parent facciamo:
           //super.nome Prototipo Della Classe Che Vogliamo Chiamare
        super.shout();
        console.log('zzzzzzzzzz!');
    }
}

var creeper = new Creepers('Creeper', 60);
console.log(creeper.shout());


//per Riassumere:
//una classe va prima dichiarata e poi richiamata, a differenza delle funzioni (hoisting)

//possimao estendere una classe principale extend
  //possiamo avere il nostro proprio costruttore nella classe child, e se abbiamo bisogno di
    // quello padre usiamo super
//ATTENZIONE - prima di assegnare qualsiasi proprietà bisogna chiamare super


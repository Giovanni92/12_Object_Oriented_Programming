
//A differenza della funzione che abbiamo creato in precedenza Alien non gli posso passare dei parametri
//per passare dei parametri che verranno utilizzati al momento della costruzine dell'oggetto
 //devo chiamare un metodo constructor() che verra chiamato per la creazione di ogni nuovo oggetto
  //in questo metodo posso passare valori predefiniti: es
class Alien{
    constructor(weapons){
        //come val.predefiniti ho weapons
         // se non mi passa alcuna arma gli do di default ['pistols']
        this.weapons = weapons || ['pistols'];
        this.health = 80;
    }

    //fuori dal costruttore posso mettere dei metodi che andranno a finire nel prototype dell'oggetto
    getWeapons(){
        return this.weapons;
    }
    increaseHealth(health){
        this.health +=health;
    }
    getHealth(){
        return this.health;
    }

};

//passandogli dei valori il nuovo oggetto avrà nuove armi nella sua propietà
var alien = new Alien(['pistols','lasers']);
// console.log(alien);

// console.log(alien.getWeapons());


//Ora dimostriamo che funziona allo stesso modo di come creavamo degli oggetti con le funzioni

Alien.prototype.addWeapon = function(weapon){
    this.weapons.push(weapon);
}

alien.addWeapon('laserBeam');
//possiamo vedere che dopo la creazione della nuova funzione con prototype,
  // il metodo ci aggiunge un arma all'arsenale
// console.log(alien.getWeapons());

//class crea una funzione che è una funzione con questo costruttore (constructor(weapons))
//Tutti gli oggetti creati di class ereditano tutti i metodi che derivano dal costrutto function

//incremento la salute dell'alieno di 20 punti in più
alien.increaseHealth(20);
//quando chiamo il metodo getHealth (che l'ho messo nel prototype) - tutto quello che non cè 
  //dentro il costruttore fa parte del prototype di Alien,
    //come se avessi scritto Alien.prototype.increaseHealth oppure Alien.prototype.getHealth

//per riassumere il modo di costruire gli oggetti è lo stesso, sia costru3endoli dentro il 
  //prototype della classe, che chiamandoli esternamente es.Alien.prototype.increaseHealth
console.log(alien.getHealth());


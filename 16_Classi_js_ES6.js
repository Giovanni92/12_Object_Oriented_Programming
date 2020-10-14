//costrutto class

//Per creare o simulare le classi in java, noi utilizzavamo una funzione
 //Creavamo una funzione prototipo
  //mettevamo che il nome della funzione era il costruttore della classe
    //e potevamo inizializzare delle proprietà

    function Alien(){
    //sono le caratteristiche di tutti gli oggetti che costruirò con la funzione Alien
    this.type ='Alien';
      this.weapons = ['pistols', 'laserbeam'];

}

//Quando volevamo creare un oggetto di questo tipo:
var alien = new Alien();

//Questo nuovo oggetto alien eredita le prop che abbiamo nel costruttore:
console.log(alien.type);

//possiamo aggiungere dei metodi se vogliamo
 //nomeFunzione.prototype.nomeMetodo
Alien.prototype.getWeapons = function() {
    return this.weapons;
}

//possiamo vedere che ha ereditato automaticamente il metodo perchè lo cerca nel prototype
console.log(alien.getWeapons());




//Nel prossimo esempio vedremo il costrutto class in ES6


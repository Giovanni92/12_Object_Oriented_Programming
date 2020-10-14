
/* The static keyword defines a static method or property for a class. 
Neither static methods nor static properties can be called on instances of the class. 
Instead, they're called on the class itself. Static methods are often utility functions, 
such as functions to create or clone objects, whereas static properties are useful for caches,
 fixed-configuration, or any other data you don't need to be replicated across instances. */

 
 class Triple {
    static customName = 'Tripler';
    static description = 'I triple any number you provide';
    static triple(n = 1) {
      return n * 3;
    }
  }

  class BiggerTriple extends Triple {
    static longDescription;
    static description = 'I square the triple of any number you provide';
    static triple(n) {
      return super.triple(n) * super.triple(n);
    }
  }

  console.log(Triple.description);
  console.log(Triple.triple());      // 3
  console.log(Triple.triple(6));     // 18

  //instanzio nuovo oggetto da Triple
  var tp = new Triple();

  console.log(BiggerTriple.triple(3));        // 81 (not affected by parent's instantiation)
  console.log(BiggerTriple.description);      // 'I square the triple of any number you provide'
  console.log(BiggerTriple.longDescription);  // undefined
  console.log(BiggerTriple.customName);       // 'Tripler'

  //chiamando un metodo statico con un istanza di un oggetto questa non viene trovata nel prototype
//   console.log(tp.triple());         // 'tp.triple is not a function'.



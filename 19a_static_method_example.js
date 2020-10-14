//Calling static members from another static method

//In order to call a static method or property within another static method of the same class,
// you can use the this keyword.

// class StaticMethodCall {
//     static staticProperty = 'static property';
//     static staticMethod() {
//       return 'Static method and ' + this.staticProperty + ' has been called';
//     }
//     static anotherStaticMethod() {
//       return this.staticMethod() + ' from another static method';
//     }
//   }
//   StaticMethodCall.staticMethod(); 
//   // 'Static method and static property has been called'
  
//   StaticMethodCall.anotherStaticMethod(); 
//   // 'Static method and static property has been called from another static method'




  //Calling static members from a class constructor and other methods

  class StaticMethodCall {
    constructor() {
      console.log(StaticMethodCall.staticProperty); // 'static property'
      console.log(this.constructor.staticProperty); // 'static property' 
      console.log(StaticMethodCall.staticMethod()); // 'static method has been called.' 
      console.log(this.constructor.staticMethod()); // 'static method has been called.' 
    }
   
    static staticProperty = 'static property';
    static staticMethod() {
      return 'static method has been called.';
    }
  }
// JavaScript Demo: Expressions - this

const test = {
    prop: 42,
    funzione : function(){
        return this.prop;
    },
};

console.log(test.funzione());
console.log(test.prop);



//A property of an execution context (global, function or eval) that, in non–strict mode, 
//is always a reference to an object and in strict mode can be any value.


//In the global execution context (outside of any function),
// this refers to the global object whether in strict mode or not.

// In web browsers, the window object is also the global object:
// console.log(this === window); // true



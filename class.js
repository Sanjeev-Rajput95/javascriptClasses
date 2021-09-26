class Bubble {
    constructor (x=2,y=4) {

        console.log("hello",x,y)
    }

    // its a static function of  buuble class and we can call this function 
    // without making object(instance) of this class 

   static fun () {                         
        console.log("this is function")
    }

} 
Bubble.fun()
// let a = new Bubble ()
// let b = new Bubble ("y","x")
// a.fun()
// b.fun()

let a = 10;      // this is a one way of assign value
var a = 20;      //  this is a second way of assigning the value
const b = 30;    // this is a third way of assigning the value
let a = 45;
let b = a;      // this is also a way of assigning the values
let name ;
name = 'sanjeev';   // this is also a way of assigning the 
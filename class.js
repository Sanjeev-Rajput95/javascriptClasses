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
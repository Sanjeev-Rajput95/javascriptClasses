class Bubble {
    constructor (x=2,y=4) {

        console.log("hello",x,y)
    }
    fun () {
        console.log("this is function")
    }

} 
let a = new Bubble ()
let b = new Bubble ("y","x")
a.fun()
b.fun()
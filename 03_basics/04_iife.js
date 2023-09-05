// immediatelym invoked function expression
(function chai(){
    //  this is called named iife
    console.log(`DB connected`)
})();
(function chaiaurcode(){
    console.log(`DB connected`)
})();

( (name)=>{
    // this is called simple iife
    console.log(`DB connected ${name}`)
})('lokey')
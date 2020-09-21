let calc = function (n1, callback){

    console.log("Hola calc");
    callback();
}

let segunda = function(){

    console.log("Hola callback");

}

calc(1,segunda);
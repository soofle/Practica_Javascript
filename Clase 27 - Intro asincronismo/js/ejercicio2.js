let calc = function (n1, callback){

    if (typeof(callback) !== "function"){
        return false;
    }
    console.log("Hola calc");
    callback();
}

let segunda = function(){

    console.log("Hola callback");

}

calc(1,segunda);
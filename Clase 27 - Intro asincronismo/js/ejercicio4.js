let calc = function (n1, callback){

    if (typeof(callback) !== "function"){
        return false;
    }
    callback(n1);
}

let raizcuadrada = function(numero){

    console.log(Math.sqrt(numero));

}

calc(4,raizcuadrada);
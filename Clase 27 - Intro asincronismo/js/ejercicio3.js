let calc = function (n1, callback){

    if (typeof(callback) !== "function"){
        return false;
    }
    callback(n1);
}

let cuadrado = function(numero){

    console.log(numero*numero);

}

calc(4,cuadrado);
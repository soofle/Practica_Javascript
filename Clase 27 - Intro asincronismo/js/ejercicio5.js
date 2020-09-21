let calc = function (n1, callback){

    if (typeof(callback) !== "function"){
        return false;
    }
    callback(n1);
}

let esprimo = function(numero){

    if (numero === 0){
        return false;
    }
    let limite = Math.sqrt(numero);

    for(i = 2; i <= limite; i++){
        let resto = numero%i;
        
        if(resto == 0){ 
            console.log("No es un número primo");
            return;
        }

    }
    console.log("Es un número primo");
    
}

calc(7,esprimo);
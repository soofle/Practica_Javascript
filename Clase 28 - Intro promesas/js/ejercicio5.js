let numero = parseInt (window.prompt("Ingrese un número"));

let promesa_suma = new Promise (
    function(resolve,reject) {
        resolve("La suma del número por sí mismo es: ",numero+numero);
    }
);
let promesa_cuadrado = new Promise (
    function(resolve,reject) {
        
        resolve("El cuadrado del número es: ",numero*numero);
    }
);



let calc = function (n1, callback){

    if (typeof(callback) !== "function"){
        return false;
    }
    callback(n1);
}

let raizcuadrada = function(numero){

    console.log(Math.sqrt(numero));

}

let doble = function(numero){

    console.log(numero*2);

}

promesa1 = new Promise( (resolve, reject) => {
    let result = calc(2, doble)
    resolve(result)
})

promesa2 = new Promise( (resolve, reject) => {
    try {
        let result = calc(16, raizcuadrada)
        resolve(result)
    } catch(error) {
        reject(error)
    }
    
})

promesa1
    .then( function(response) {
        console.log(response)
        return promesa2
    }).then( (response) => {
        console.log(response)
        return promesa3
    })
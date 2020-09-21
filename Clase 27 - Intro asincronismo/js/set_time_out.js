setTimeout(function(){console.log("Hola")},10000) //Retraso

let suma = (n1, n2) => n1 + n2; //Defino funcion suma
let resta = (n1, n2) => n1 - n2; //Defino funcion resta

let calculadora = function (n1, n2, operacion){

    return operacion(n1, n2);
}
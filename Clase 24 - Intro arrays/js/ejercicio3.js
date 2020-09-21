let array=[];
let max;
let min;
let valorIngresado;

do {

    valorIngresado = parseInt(window.prompt("Ingrese un número para agregar al array o 0 para terminar"));
    
    if (valorIngresado == 0) {

        break;

    } else {

        array.push(valorIngresado);
        
        if (max == "undefined") {
            max = valorIngresado;
        }
        if (min == "undefined") {
            min = valorIngresado;
        }

        if(valorIngresado < min){
            min = valorIngresado;
        }
        if(valorIngresado > max){
            max = valorIngresado;
        }
    }
} while (valorIngresado != 0);

console.log(array);

array.splice(array.indexOf(max),1);
array.splice(array.indexOf(min),1);

console.log(array);
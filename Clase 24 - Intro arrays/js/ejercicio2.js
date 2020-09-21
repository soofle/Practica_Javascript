let arrayPares=[];
let arrayImpares=[];
let arrayNoNum=[];

let valorIngresado;
let auxiliar;

do {

    valorIngresado = window.prompt("Ingrese un número para agregar al array o 0 para terminar");
    auxiliar = parseInt(valorIngresado);

    if (valorIngresado == 0) {

        break;

    } else if (isNaN(auxiliar)){

        arrayNoNum.push(valorIngresado);

    } else if (parseInt(valorIngresado) %2 == 0){

        arrayPares.push(valorIngresado);

    } else {

        arrayImpares.push(valorIngresado);

    }

} while (valorIngresado != 0);

console.log(arrayPares);
console.log(arrayImpares);
console.log(arrayNoNum);

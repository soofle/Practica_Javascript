let array=[];
let valorIngresado;
let valorTransformado;

do {

    valorIngresado = window.prompt("Ingrese un número para agregar al array o stop para terminar");

    valorTransformado = Number(valorIngresado);

    if(!isNaN(valorTransformado)){
        array.push(valorIngresado);
    }

} while (valorIngresado.toLowerCase() !== "stop");

console.log(array);

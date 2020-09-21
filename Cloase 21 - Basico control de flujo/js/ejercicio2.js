var suma = 0;

for (i = 0; i < 5; i++) {

    var num = parseInt(window.prompt("Ingrese un número"));
    suma = suma + num;
}

window.alert("La suma de los números es: "+ suma +" y el promedio de los números ingresados es: " + (suma/5));
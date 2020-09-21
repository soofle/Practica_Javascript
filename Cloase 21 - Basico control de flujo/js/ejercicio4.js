var i = 0;
var suma = 0;

do {
    var num = window.prompt("Ingrese un número o 'salir'");

    if (num < 10) {    
        num = parseInt(num);
        i++;
        suma = suma+num;
    }    
} while(num != "salir"); 

var promedio = 0;
promedio = suma/i;

console.log(promedio);
var par = 0;
var impar = 0;
var num;

//let y const tienen scope de bloque {}

do {
    num = parseInt(window.prompt("Ingrese números y a continuación se informará si hubo más ingresos pares o impares. Ingrese 0 para finalizar"));  
    if (num == 0) {
        break;
    }
    if (num %2 == 0) {
        par++;
    } else {
        impar++;
    }
} while(num != 0);

if(par>impar) {

    window.alert("Tuvieron más ingresos los pares");

} else if(par == impar) {
    
    window.alert("Hubo igual cantidad de ingresos pares e impares");

} else {

    window.alert("Tuvieron más ingresos los impares");
}

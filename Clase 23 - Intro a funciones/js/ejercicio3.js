var n1;
var n2;
var sum;

function suma(num1, num2){

    if (isNaN(num1)){
        throw new Error("Error de tipo de dato ingresado");
    }else if (isNaN(num2)){
        throw new Error("Error de tipo de dato ingresado");
    }
    var suma = num1+num2;
    window.alert("La suma es: "+suma);
    return suma;
}

do{
    n1 = parseInt(window.prompt("Ingrese un número n1"));
    n2 = parseInt(window.prompt("Ingrese un número n2"));

    try{
        sum = suma(n1,n2);
    }
    catch(e){
        console.log(e.name);
        console.log(e.message);
    }
} while(sum < 100);

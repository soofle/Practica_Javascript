const pi = 3.1415926535897932384;

var radio = parseFloat(window.prompt("Ingrese el radio del círculo"));

function diametroCirculo (r){
    var diametro = 2*r;
    window.alert("El diámetro del círculo es: "+diametro);
    return diametro;
}

function perimetroCirculo (r){
    var perimetro = 2*pi*r;
    window.alert("El perímetro del círculo es: "+perimetro);
    return perimetro;
}

function superficieCirculo (r){
    var superficie = pi*r*r;
    window.alert("La superficie del círculo es: "+superficie);
    return perimetro;
}

diametroCirculo(radio); // var diametro = diametroCirculo(radio); si quiero guardar el valor
perimetroCirculo(radio);
superficieCirculo (radio);
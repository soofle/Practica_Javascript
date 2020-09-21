const usuario="sofia";
const contrasenia="secreto123";

let is_valid = false;

function validar(usuarioCorrecto, contraseniaCorrecta, userIngresado, passwordIngresada){

    if(userIngresado != usuarioCorrecto){
        window.alert("Usuario incorrecto. Verifique sus credenciales");
        return false;
    }
    if(passwordIngresada != contraseniaCorrecta){
        window.alert("Contraseña incorrecta. Verifique sus credenciales");
        return false;
    }
    return true;
}

while (is_valid == false){

    var user = window.prompt("Ingrese su usuario");
    var password = window.prompt("Ingrese su contraseña");
    
    is_valid = validar(usuario, contrasenia, user, password);
}

window.alert("Ingreso exitoso. Credenciales correctas");
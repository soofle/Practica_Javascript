var usuario = "usuario";
var contrasena = "1234";

var usuarioIng = window.prompt("Ingrese su usuario");
var contrasenaIng = window.prompt("Ingrese su contraseña");

window.alert(((usuario==usuarioIng)&&(contrasena==contrasenaIng)) ? "Sesión iniciada":"Usuario o contraseña incorrecta");


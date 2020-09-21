const login = document.getElementById("login");

var formulario = document.getElementById("formulario");
formulario.style.display = "none";

//AGREGAR UN CHECKBOX PARA RECORDAR USUARIO, value =1 porque hay que ponerle valor

login.addEventListener( "click", function iniciarSesion(){
    
    if(localStorage.getItem("usuarioGuardado")==null){
        var usuarioIng = window.prompt("Ingrese su usuario");
        var contrasenaIng = window.prompt("Ingrese su contraseña");
        localStorage.setItem("usuarioGuardado", usuarioIng);
        formulario.style.display = "block";
        
    }else {
        
        window.alert("Ya estás logueado");
    };
    
}) ;

const logout = document.getElementById("logout");

logout.addEventListener( "click", function cerrarSesion(){
    
    localStorage.removeItem("usuarioGuardado");
    
}) ;

const guardar = document.getElementById("guardar");

guardar.addEventListener( "click", function obtenerDatos(){

    let Nombre = document.getElementById("nombre").value;
    let Apellido = document.getElementById("apellido").value;
    let DNI = document.getElementById("dni").value;
    let FechaNac = document.getElementById("fechanac").value;
    let Hobbies = document.getElementById("hobbies").value;

    const persona = {
        Nombre: Nombre,
        Apellido: Apellido,
        DNI: DNI,
        FechaNac: FechaNac,
        Hobbies: Hobbies
    }
    const personaJson = JSON.stringify(persona);
    console.log(personaJson)
}) ;










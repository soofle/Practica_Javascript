//modulo usuarios
const usuarios_del_sistema = [];
class Usuario {
  constructor(nombre, apellido, email, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.edad = edad;
  }
}
function agregarUsuario(usuario) {
  usuarios_del_sistema.push(usuario)
}

// function agregarUsuario(nombre, apellido, email, edad) {
//     usuarios_del_sistema.push(new Usuario(nombre, apellido, email, edad))
// }

function listarUsuarios() {
  console.log(usuarios_del_sistema);
}
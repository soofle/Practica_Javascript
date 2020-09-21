var i = 0;

do {
   var edad = parseInt(window.prompt("Ingrese su edad"));
   if(edad >= 18) {
      i++; 
   } 
} while(edad != 0)

console.log(i);
//Reemplazar el menu por un texto

const menuVacio = document.getElementById("menuVacio"); 
menuVacio.innerHTML = "Este es el nuevo menu"; 

fetch("./menu.html")
    .then( function (response){

        return response.text(); //devuelve una promesa entonces la tengo que capturar
    }) 
//aca tenemos el texto ya, y es el que quiero poner en nuestro div vacio

    .then( function(myText){
        
        setTimeout(()=>menuVacio.innerHTML = myText, 3000);         
    }
    );
    


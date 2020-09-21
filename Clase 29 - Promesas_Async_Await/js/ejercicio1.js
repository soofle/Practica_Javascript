function descargarDatos(url){
    return fetch(url)
        .then(response => response.text()) //no sabe que es un jason, muestra como  texto
        .then(text => {
            console.log(text);
        }).catch(err => {
            console.error("Fallo el fetch", err);
        });

        
    }
    
descargarDatos("https://jsonplaceholder.typicode.com/users");

//for each recorre la lista entera, falta esta parte
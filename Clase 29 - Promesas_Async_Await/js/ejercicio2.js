async function descargarDatos(url){
    try{
        let response = await fetch(url);
        let datos = await response.json();
        datos.forEach(user => console.log(user.username));
    }
    catch(err){
        console.error("Fallo el fetch", err);
    }
}

descargarDatos("https://jsonplaceholder.typicode.com/users");
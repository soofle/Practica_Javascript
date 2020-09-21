const githubUser = async username => {
	const resp = await fetch('https://api.github.com/users/' + username);
	const data = await resp.json();
    console.log(data);
}

async function descargarDatos(url){
    try{
        let response = await fetch(url);
        let datos = await response.json();
        datos = datos.slice(0, 10);
        
        datos.forEach(  user => {

            //console.log(user.login); me da los datos, pero la idea es que yo con un 
            //fetch tomar de la pagina de github esos usuarios. Usar un fetch dentro

            githubUser(user.login)

        } );
    }
    catch(err){
        console.error("Fallo el fetch", err);
    }
}

descargarDatos("https://gist.githubusercontent.com/paulmillr/4524946/raw/c462a62ac9f3a072fc4106bbd131335ad730da16/github-users-stats.json");
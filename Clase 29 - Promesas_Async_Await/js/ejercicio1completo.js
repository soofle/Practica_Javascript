fetch ("https://jsonplaceholder.typicode.com/users") //el fetch ya es una promesa, no necesito crear una

    .then(resp => resp.json())
    .then(data => {
        data.forEach(user => console.log(user.username) )
    }).catch( err => console.log("Algo fallo!!", err) )
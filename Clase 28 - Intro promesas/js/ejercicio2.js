let promesa = new Promise (
    function(resolve,reject) {
        setTimeout( function() {
            reject("pasaron los 1000ms")
        } , 1000)
    }
)

promesa.catch((r) => console.log(r)) //se ejecuta cuando cambia el estado
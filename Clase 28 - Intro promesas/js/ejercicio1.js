let promesa = new Promise( (resolve,reject) => {
    setTimeout( () => resolve() , 2000)}
);

promesa.then( (r) => console.log(r) );  


let promesa2 = new Promise( (resolve,reject) => {
    setTimeout( () => resolve("listo") , 2000)}
);

promesa2.then( (r) => console.log(r) );  


let promesa3 = new Promise (
    function(resolve,reject) {
        setTimeout( function() {
            console.log("pasaron los 10000ms")
        } , 10000)
    }
);

let promesa4 = new Promise (
    function(resolve,reject) {
        setTimeout( function() {
            resolve("pasaron los 10000ms")
        } , 10000)
    }
);

//se ejecuta cuando le mando el .then
promesa4.then( function(valor_pasado_en_resolve){
    console.log(valor_pasado_en_resolve);
}  );
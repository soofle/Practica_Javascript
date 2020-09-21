let promesa = new Promise (
    function(resolve,reject) {
        let numero = Math.floor(Math.random() * 10);
        if (numero%2 == 0){
            resolve(numero + "-> El número es par")
        }else {
            reject(numero + "-> El número es impar")
        }        
    }
)

promesa
    .then((r) => console.log(r))
    .catch((r) => console.log(r))

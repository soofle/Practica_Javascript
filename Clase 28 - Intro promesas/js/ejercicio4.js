let promesa1 = new Promise (
    function(resolve,reject) {

        let num1 = Math.random() * 100;
        setTimeout( function() {
            resolve("Ganó la uno. Tiempo de retardo: " + num1)
        } , num1);

    }
);

let promesa2 = new Promise (
    function(resolve,reject) {

        let num2 = Math.random() * 100;
        setTimeout(function() {
            resolve("Ganó la dos. Tiempo de retardo: " + num2)
        } , num2);

    }
);

Promise.race([promesa1, promesa2]).then((respuesta) => console.log(respuesta));


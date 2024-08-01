//  Ejercicio 2

let valorCambio = 4047.85;

//  Captamos el Valor de los Pesos
let valorPesos = document.getElementById("pesos").value;
//console.log(valorPesos);

//  Captamos el Valor de los Dolares
let valorDolar = document.getElementById("dolar").value;
//console.log(valorDolar);

//  Generamos la Funcion para Cambiar de Pesos a Dolares
let nuevoValorPesos = document.getElementById("pesos");
nuevoValorPesos.addEventListener("keyup", (e) => {
    //console.log(e.target.value);
    let valor = e.target.value / valorCambio;
    document.getElementById("dolar").value = Intl.NumberFormat("de-DE").format(valor.toFixed(2));
});

//  Generamos la Funcion para Cambiar de Dolares a Pesos
let nuevoValorDolar = document.getElementById("dolar");
nuevoValorDolar.addEventListener("keyup", (e) => {
    //console.log(e.target.value);
    let valor = e.target.value * valorCambio;
    document.getElementById("pesos").value = Intl.NumberFormat("de-DE").format(valor.toFixed(2));
});

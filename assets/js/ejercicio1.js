//  Ejercicio 1

//  Generamos la funcion al hacer click en Calcular
document.getElementById("calcular").addEventListener("click", () => {
    // Verificamos que estamos dentro del Evento Click
    //console.log("calcular");
    //  Captamos el Valor de la Estatura
    let valorEstatura = document.getElementById("estatura").value;
    //console.log(valorEstatura);
    //  Captamos el Valor del Peso
    let valorPeso = document.getElementById("peso").value;
    //console.log(valorPeso);
    //  Calculamos el IMC
    let imc = valorPeso / (valorEstatura / 100) ** 2;
    //console.log(imc.toFixed(2));
    //  Mostramos el resultado en el Input del Resultado
    document.getElementById("resultado").value = imc.toFixed(2);
});
//  Llamamos los Datos
import { notas } from "./notas.js";

//  Validacion de los caracteres en textarea
$("#mensaje_ayuda").text("225 carácteres restantes");
$("#message").keydown(function () {
    var max = 225;
    var len = $(this).val().length;
    if (len >= max) {
        $("#mensaje_ayuda").text("Has llegado al límite"); // Aquí enviamos el mensaje a mostrar
        $("#mensaje_ayuda").addClass("text-danger");
        $("#message").addClass("is-invalid");
        $("#inputsubmit").addClass("disabled");
    } else {
        var ch = max - len;
        $("#mensaje_ayuda").text(ch + " carácteres restantes");
        $("#mensaje_ayuda").removeClass("text-danger");
        $("#message").removeClass("is-invalid");
        $("#inputsubmit").removeClass("disabled");
    }
});

//  Borramos o Limpiamos los datos del POPUP
document.getElementById("limpiaCampo").addEventListener("click", () => {
    document.getElementById("title").value = "";
    document.getElementById("message").value = "";
    $("#mensaje_ayuda").text("225 carácteres restantes");
    $("#mensaje_ayuda").removeClass("text-danger");
    $("#message").removeClass("is-invalid");
    $("#inputsubmit").removeClass("disabled");
});

//  Guardamos los datos en el array
document.getElementById("guardar").addEventListener("click", () => {
    const vector = [];
    var a = notas[notas.length - 1].id;
    let title = document.getElementById("title").value;
    //console.log(title);
    let message = document.getElementById("message").value;
    //console.log(message);
    notas.push({
        id: a + 1,
        titulo: title,
        texto: message,
        realizada: false,
    });

    document.getElementById("title").value = "";
    document.getElementById("message").value = "";
    $("#mensaje_ayuda").text("225 carácteres restantes");
    $("#mensaje_ayuda").removeClass("text-danger");
    $("#message").removeClass("is-invalid");
    $("#inputsubmit").removeClass("disabled");
    BorrarDatos();
    CargarDatos();
});

// Borramos los datos y cargamos nuevamente el div
function BorrarDatos() {
    contenedor.parentNode.removeChild(contenedor);
    let main = document.getElementById("main");
    let contenedor2 = document.createElement("div");
    contenedor2.setAttribute("id", "contenedor");
    contenedor2.className = "contenedor";
    contenedor2.innerHTML = `   
                        <div class="" id="tarjeta"></div>
                        `;
    main.appendChild(contenedor2);
}

// Cargamos los Datos
function CargarDatos() {
    let contenedor = document.getElementById("contenedor");
    check();
    for (let i = 0; i < notas.length; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `   
                        <div class="cuadro text-center p-2 align-self-center" id="cuadro">
                            <div class="card">
                                <div class="card-header d-flex justify-content-start">
                                    <input class="form-check-input" type="checkbox" value="${[i]}" id="checkbox" ${
            notas[i].realizada ? "checked" : ""
        }>
                                    <h4 class="card-title ps-3">#${notas[i].id}</h4>
                                    <h4 class="card-title ps-3">${notas[i].titulo}</h4>
                                </div>
                                <div class="card-body">
                                    <h6 id="texto${[i]}" class="card-text pb-2 texto">${notas[i].texto}</h6>
                                    <a href="#" class="btn btn-danger">Eliminar</a>
                                </div>
                            </div>
                        </div>
                        `;
        contenedor.appendChild(tarjeta);
        let p = notas[i].realizada ? "checked" : "";
        console.log(p);
        if (p === "checked") {
            document.getElementById(`texto${[i]}`).style.textDecoration = "line-through";
        } else {
            document.getElementById(`texto${[i]}`).style.textDecoration = "none";
        }
    }
    check();
    console.log(notas);
}

//  Cargamos los Datos de las Notas al Iniciar la Pagina Web
window.addEventListener("load", function () {
    BorrarDatos();
    let contenedor = document.getElementById("contenedor");
    check();
    for (let i = 0; i < notas.length; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `   
                        <div class="cuadro text-center p-2 align-self-center" id="cuadro">
                            <div class="card">
                                <div class="card-header d-flex justify-content-start">
                                    <input class="form-check-input" type="checkbox" value="${[i]}" id="checkbox" ${
            notas[i].realizada ? "checked" : ""
        }>
                                    <h4 class="card-title ps-3">#${notas[i].id}</h4>
                                    <h4 class="card-title ps-3">${notas[i].titulo}</h4>
                                </div>
                                <div class="card-body">
                                    <h6 id="texto${[i]}" class="card-text pb-2 texto">${notas[i].texto}</h6>
                                    <a href="#" class="btn btn-danger">Eliminar</a>
                                </div>
                            </div>
                        </div>
                        `;

        contenedor.appendChild(tarjeta);
        let p = notas[i].realizada ? "checked" : "";
        console.log(p);
        if (p === "checked") {
            document.getElementById(`texto${[i]}`).style.textDecoration = "line-through";
        } else {
            document.getElementById(`texto${[i]}`).style.textDecoration = "none";
        }
    }
});

function check() {
    const form = document.getElementById("contenedor");
    form.addEventListener("change", (event) => {
        const checked = document.querySelector("input[type=checkbox]:checked");
        //console.log(checked);
        let nuevoCheck = event.target.checked;
        //console.log(nuevoCheck);
        if (nuevoCheck === false) {
            //console.log("Checkbox no seleccionado.");
            let n = event.target.value;
            let a = 1 + parseInt(n);
            //console.log(n);
            //.log(a);

            let nuevoArray = notas.find(({ id }) => id === a);
            //console.log(nuevoArray);

            notas.map(function (dato) {
                if (dato.id == a) {
                    dato.realizada = false;
                }

                return dato;
            });
            BorrarDatos();
            CargarDatos();
        } else {
            //console.log("¡Checkbox seleccionado!");
            let n1 = event.target.value;
            let a1 = 1 + parseInt(n1);
            //console.log(n);
            //console.log(a);

            let nuevoArray1 = notas.find(({ id }) => id === a1);
            //console.log(nuevoArray);

            notas.map(function (dato1) {
                if (dato1.id == a1) {
                    dato1.realizada = true;
                }

                return dato1;
            });
            BorrarDatos();
            CargarDatos();
        }
        console.log(notas);
    });
}

document.getElementById("checkbox").addEventListener("click", () => {
    var miCheckbox = document.getElementById("checkbox");
    if (miCheckbox.checked) {
        console.log("¡Checkbox seleccionado!ppppppppp");
        let valorRealizado = true;

        let nuevoArray = notas
            .filter((datos) => datos.realizada)
            .map((datos) => ({
                id: datos.id,
                titulo: datos.titulo,
                texto: datos.texto,
                realizada: datos.realizada,
            }));
        check();
        //  Mostramos el Resultado
        //console.log(nuevoArray);
        BorrarDatos();
        let contenedor = document.getElementById("contenedor");
        check();
        for (let i = 0; i < nuevoArray.length; i++) {
            let tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";
            tarjeta.innerHTML = `   
                            <div class="cuadro text-center p-2 align-self-center" id="cuadro">
                                <div class="card">
                                    <div class="card-header d-flex justify-content-start">
                                        <input class="form-check-input" type="checkbox" value="${nuevoArray[i].id}" id="checkbox" ${
                nuevoArray[i].realizada ? "checked" : ""
            }>
                                        <h4 class="card-title ps-3">#${nuevoArray[i].id}</h4>
                                        <h4 class="card-title ps-3">${nuevoArray[i].titulo}</h4>
                                    </div>
                                    <div class="card-body">
                                    <h6 id="texto${[i]}" class="card-text pb-2 texto">${nuevoArray[i].texto}</h6>
                                        <a href="#" class="btn btn-danger">Eliminar</a>
                                    </div>
                                </div>
                            </div>
                            `;

            contenedor.appendChild(tarjeta);
            let p = nuevoArray[i].realizada ? "checked" : "";
            //console.log(p);
            if (p === "checked") {
                document.getElementById(`texto${[i]}`).style.textDecoration = "line-through";
            } else {
                document.getElementById(`texto${[i]}`).style.textDecoration = "none";
            }
        }

        const form = document.getElementById("contenedor");
        form.addEventListener("change", (event) => {
            const checked = document.querySelector("input[type=checkbox]:checked");
            //console.log(checked);
            let nuevoCheck = event.target.checked;
            //console.log(nuevoCheck);
            if (nuevoCheck === false) {
                check();
                console.log("Checkbox no seleccionado.0000000000000");
                let n = event.target.value;
                let a = parseInt(n);
                //console.log(n);
                //console.log(a);

                let nuevoArray = notas.find(({ id }) => id === a);
                console.log(nuevoArray);

                notas.map(function (dato) {
                    if (dato.id == a) {
                        dato.realizada = false;
                    }

                    return dato;
                });
            } else {
                check();
                console.log("¡Checkbox seleccionado!00000000000");

                let n1 = event.target.value;
                let a1 = parseInt(n1);
                //console.log(n1);
                //console.log(a1);

                let nuevoArray1 = notas.find(({ id }) => id === a1);
                //console.log(nuevoArray);

                notas.map(function (dato1) {
                    if (dato1.id == a1) {
                        dato1.realizada = true;
                    }

                    return dato1;
                });
            }
            
            document.getElementById("checkbox").checked = false

            //console.log(notas);
            BorrarDatos();
        CargarDatos();
        check();
        });
    } else {
        console.log("Checkbox no seleccionado.ppppppppppppppp");
        BorrarDatos();
        CargarDatos();
        check();
    }
});

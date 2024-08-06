const notas = [
    {
        id: 1,
        titulo: "Sacar la Basura",
        texto: "Mi Mama me va a retar si no lo hago",
        realizada: false,
    },
    {
        id: 2,
        titulo: "Comer",
        texto: "Quedo comida de ayer",
        realizada: true,
    },
    {
        id: 3,
        titulo: "Estudiar Eventos",
        texto: "Estoy flojo de papeles y nbo voy a aprobar el task 3",
        realizada: false,
    },
    {
        id: 4,
        titulo: "Tomar agua",
        texto: "Debo hidratarme bien para no desmayarme",
        realizada: true,
    },
];

//  Validacion de los caracteres en textarea en el POPUP
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

//  Cargamos los Datos de las Notas
function CargamosNotas() {
    //console.log(notas.length);

    if (notas.length == 0) {
        console.log("no hay nada");
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `   
                        <div class="text-center p-2 align-self-center" id="cuadro">
                            <h4>NO HAY NOTAS PARA MOSTRAR</h4>
                        </div>
                        `;
        contenedor.appendChild(tarjeta);
    } else {
        let contenedor = document.getElementById("contenedor");
        for (let i = 0; i < notas.length; i++) {
            let tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";
            tarjeta.innerHTML = `   
                        <div class="cuadro text-center p-2 align-self-center" id="cuadro">
                            <div class="card">
                                <div class="card-header d-flex justify-content-start">
                                    <input class="form-check-input" onClick="marcarRealizada(${notas[i].id})" type="checkbox" value="${[
                i,
            ]}" id="checkbox" ${notas[i].realizada ? "checked" : ""}>
                                    <h4 class="card-title ps-3">#${notas[i].id}</h4>
                                    <h4 class="card-title ps-3">${notas[i].titulo}</h4>
                                </div>
                                <div class="card-body">
                                    <h6 id="texto${[i]}" class="card-text pb-2 texto">${notas[i].texto}</h6>
                                    <a href="#" class="btn btn-danger" onClick="eliminarNota(${notas[i].id})">Eliminar</a>
                                </div>
                            </div>
                        </div>
                        `;
            contenedor.appendChild(tarjeta);
            let ckech = notas[i].realizada ? "checked" : "";
            if (ckech === "checked") {
                document.getElementById(`texto${[i]}`).style.textDecoration = "line-through";
            } else {
                document.getElementById(`texto${[i]}`).style.textDecoration = "none";
            }
        }
        console.log(notas);
    }
}

//  Marcar Realizada la Nota
function marcarRealizada(valorId) {
    console.log(valorId);

    const form = document.getElementById("contenedor");
    form.addEventListener("change", (event) => {
        const checked = document.querySelector("input[type=checkbox]:checked");
        //console.log(checked);
        let nuevoCheck = event.target.checked;
        //console.log(nuevoCheck);
        if (nuevoCheck === false) {
            console.log("Checkbox no seleccionado.");

            let nuevoArray1 = notas.find(({ id }) => id === valorId);
            console.log(nuevoArray1);

            notas.map(function (dato1) {
                if (dato1.id == valorId) {
                    dato1.realizada = false;
                }

                return dato1;
            });
            console.log(notas);
        } else {
            console.log("¡Checkbox seleccionado!");

            let nuevoArray1 = notas.find(({ id }) => id === valorId);
            console.log(nuevoArray1);

            notas.map(function (dato1) {
                if (dato1.id == valorId) {
                    dato1.realizada = true;
                }

                return dato1;
            });
            console.log(notas);
        }
    });
}

//  Guardamos los datos de la Nueva Nota en el Array
document.getElementById("guardar").addEventListener("click", () => {
    if (notas.length == 0) {
        //console.log(notas.length);
        let title = document.getElementById("title").value;
        //console.log(title);
        let message = document.getElementById("message").value;
        //console.log(message);
        notas.push({
            id: 1,
            titulo: title,
            texto: message,
            realizada: false,
        });
    } else {
        //console.log(notas.length);
        var a = notas[notas.length - 1].id;
        //console.log(a);
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
    }

    document.getElementById("title").value = "";
    document.getElementById("message").value = "";
    $("#mensaje_ayuda").text("225 carácteres restantes");
    $("#mensaje_ayuda").removeClass("text-danger");
    $("#message").removeClass("is-invalid");
    $("#inputsubmit").removeClass("disabled");
    $("#checkbox").prop("checked", false);

    BorrarDatos();
    CargamosNotas();
});

// Borramos y Cargamos nuevamente el div
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

//  Eliminar la Nota
function eliminarNota(valorId) {
    //console.log(valorId);
    const index = notas.findIndex((x) => x.id === valorId);
    notas.splice(index, 1);
    //console.log(notas);
    BorrarDatos();
    CargamosNotas();
}

//  Filtro de notas realizadas
document.getElementById("checkbox").addEventListener("click", () => {
    var miCheckbox = document.getElementById("checkbox");
    if (miCheckbox.checked) {
        console.log("¡Checkbox seleccionado!");
        let valorRealizado = true;

        let nuevoArray = notas
            .filter((datos) => datos.realizada)
            .map((datos) => ({
                id: datos.id,
                titulo: datos.titulo,
                texto: datos.texto,
                realizada: datos.realizada,
            }));
        //  Mostramos el Resultado
        //console.log(nuevoArray);
        BorrarDatos();

        let contenedor = document.getElementById("contenedor");

        for (let i = 0; i < nuevoArray.length; i++) {
            let tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";
            tarjeta.innerHTML = `   
                        <div class="cuadro text-center p-2 align-self-center" id="cuadro">
                            <div class="card">
                                <div class="card-header d-flex justify-content-start">
                                    <input class="form-check-input" onClick="marcarRealizada(${nuevoArray[i].id})" type="checkbox" value="${[
                i,
            ]}" id="checkbox" ${nuevoArray[i].realizada ? "checked" : ""}>
                                    <h4 class="card-title ps-3">#${nuevoArray[i].id}</h4>
                                    <h4 class="card-title ps-3">${nuevoArray[i].titulo}</h4>
                                </div>
                                <div class="card-body">
                                    <h6 id="texto${[i]}" class="card-text pb-2 texto">${nuevoArray[i].texto}</h6>
                                    <a href="#" class="btn btn-danger" onClick="eliminarNota(${nuevoArray[i].id})">Eliminar</a>
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
        console.log(nuevoArray);
    } else {
        console.log("Checkbox no seleccionado");
        BorrarDatos();
        CargamosNotas();
    }
});

//  Buscador
let buscar = document.getElementById("buscador");
buscar.addEventListener("keyup", (e) => {
    letrasC = e.target.value;
    console.log(letrasC);

    if (letrasC == "") {
        BorrarDatos();
        CargamosNotas();
    } else {
        var list = [];
        for (var i = 0; i < notas.length; i++) {
            var curr = notas[i];
            Object.keys(curr).some(function (key) {
                if (typeof curr[key] === "string" && curr[key].includes(letrasC)) {
                    list.push(curr);
                }
            });
        }

        const result = list.reduce((acc,item)=>{
            if(!acc.includes(item)){
              acc.push(item);
            }
            return acc;
          },[])
        
          

        BorrarDatos();

        let contenedor = document.getElementById("contenedor");
        for (let i = 0; i < result.length; i++) {
            let tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";
            tarjeta.innerHTML = `   
                        <div class="cuadro text-center p-2 align-self-center" id="cuadro">
                            <div class="card">
                                <div class="card-header d-flex justify-content-start">
                                    <input class="form-check-input" onClick="marcarRealizada(${result[i].id})" type="checkbox" value="${[
                i,
            ]}" id="checkbox" ${result[i].realizada ? "checked" : ""}>
                                    <h4 class="card-title ps-3">#${result[i].id}</h4>
                                    <h4 class="card-title ps-3">${result[i].titulo}</h4>
                                </div>
                                <div class="card-body">
                                    <h6 id="texto${[i]}" class="card-text pb-2 texto">${result[i].texto}</h6>
                                    <a href="#" class="btn btn-danger" onClick="eliminarNota(${result[i].id})">Eliminar</a>
                                </div>
                            </div>
                        </div>
                        `;
            contenedor.appendChild(tarjeta);
            let ckech = result[i].realizada ? "checked" : "";
            if (ckech === "checked") {
                document.getElementById(`texto${[i]}`).style.textDecoration = "line-through";
            } else {
                document.getElementById(`texto${[i]}`).style.textDecoration = "none";
            }
        }
        console.log(result);
    }
});



CargamosNotas();

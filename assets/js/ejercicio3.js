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
        titulo: "Tomar Agua",
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
    let contenedor = document.getElementById("contenedor");
    for (let i = 0; i < notas.length; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `   
                        <div class="cuadro text-center p-2 align-self-center" id="cuadro">
                            <div class="card">
                                <div class="card-header d-flex justify-content-start">
                                    <input class="form-check-input" onClick="marcarRealizada(${notas[i].id})" type="checkbox" value="${[i]}" id="checkbox" ${
            notas[i].realizada ? "checked" : ""
        }>
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

//  Marcar Realizada la Nota
function marcarRealizada(id) {
    console.log(id);
}

//  Eliminar la Nota
function eliminarNota(id) {
    console.log(id);
}

CargamosNotas();

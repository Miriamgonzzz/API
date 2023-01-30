function iniciarPeticion() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click", gestionarPeticion);
}

/**
* en la url ponemos el sitio al que vamos a "atacar", en este caso el programa php que va a tratar los datos que vamos a enviarle. Creamos
* la variable formulario donde vamos a guardar el formulario digital que nos viene de la función crearFormulario() y poder enviarlo
*/
function gestionarPeticion() {
    let url = "AgregarPokemon.php";
    let solicitud = new XMLHttpRequest();
    let formulario = new FormData();
    formulario = crearFormulario();
    solicitud.open("POST", url, true);
    solicitud.send(formulario);
    solicitud.addEventListener("load", gestionarRespuesta);
}

/**
* función para crear el formulario digital que vamos a enviar por medio del POST. Creamos
* un nuevo objeto FormData en la variable formulario y recogemos en la variable miNombre el valor de nombre del formulario, y en miApellido
* el valor del apellido. Añadimos al objeto FormData los datos, en forma (nombre o clave, valor) con append. Retornamos el formulario para
* trabajar con el en gestionarPeticion
* @returns
*/
function crearFormulario(){
    let formulario = new FormData();
    let nombrePokemon = document.getElementsByName("nombrePokemon")[0].value;
    let numeroPokemon = document.getElementsByName("numeroPokemon")[0].value;
    let tipoPokemon = document.getElementsByName("tipoPokemon")[0].value;
    let generacionPokemon = document.getElementsByName("generacionPokemon")[0].value;
    let habitatPokemon = document.getElementsByName("habitatPokemon")[0].value;
    formulario.append("nombrePokemon",nombrePokemon);
    formulario.append("numeroPokemon",numeroPokemon);
    formulario.append("tipoPokemon",tipoPokemon);
    formulario.append("generacionPokemon",generacionPokemon);
    formulario.append("habitatPokemon",habitatPokemon);
    return formulario;
}
function gestionarRespuesta(evento) {
    let misDatos = recogerDatos(evento);
    if (misDatos.status == 200) {
        rellenarContenido("cajadatos", misDatos.responseText);
    }
}
function recogerDatos (evento) {
    let datos;
    datos = evento.target;
    return datos;
}
function rellenarContenido (id, contenido){
    let elemento = document.getElementById(id);
    elemento.innerHTML = contenido;
}
window.addEventListener("DOMContentLoaded", iniciarPeticion);

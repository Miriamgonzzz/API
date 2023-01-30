function borrarPokemon(){
    let boton = document.getElementById("botonEditar");
    boton.addEventListener("click", realizarPeticion);
}
function realizarPeticion() {
    let url = "EditarPokemon.php";
    let solicitud = new XMLHttpRequest();
    let formulario = new FormData();
    formulario = mostrarFormulario();
    solicitud.open("POST", url, true);
    solicitud.send(formulario);
    solicitud.addEventListener("load", gestionarRespuesta);
}
function mostrarFormulario () {
    let formulario = new FormData();
    let nombrePokemon = document.getElementsByName("nombrePokemon")[0].value;
    let numeroPokemon = document.getElementsByName("numeroPokemon")[0].value;
    let tipoPokemon = document.getElementsByName("tipoPokemon")[0].value;
    let generacionPokemon = document.getElementsByName("generacionPokemon")[0].value;
    let habitatPokemon = document.getElementsByName("habitatPokemon")[0].value;
    let nombre = document.getElementsByName("nombre")[0].value;
    formulario.append("nombrePokemon",nombrePokemon);
    formulario.append("numeroPokemon",numeroPokemon);
    formulario.append("tipoPokemon",tipoPokemon);
    formulario.append("generacionPokemon",generacionPokemon);
    formulario.append("habitatPokemon",habitatPokemon);
    formulario.append("nombre",nombre);
    return formulario;

}function gestionarRespuesta(evento) {
    let misDatos = recogerDatos(evento);
     if (misDatos.status == 200 && misDatos.readyState==4) {
        
        rellenarContenido("BorrarMostrar",misDatos.responseText); 
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
window.addEventListener("DOMContentLoaded", borrarPokemon);
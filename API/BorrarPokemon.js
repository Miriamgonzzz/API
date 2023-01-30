function borrarPokemon(){
    let boton = document.getElementById("botonBorrar");
    boton.addEventListener("click", realizarPeticion);
}
function realizarPeticion() {
    let url = "Borrar.php";
    let solicitud = new XMLHttpRequest();
    let formulario = new FormData();
    formulario = mostrarFormulario();
    solicitud.open("POST", url, true);
    solicitud.send(formulario);
    solicitud.addEventListener("load", gestionarRespuesta);
}
function mostrarFormulario () {
    let datosFormu = new FormData();
    let nombre=document.getElementsByName("nombre")[0].value;
    datosFormu.append("nombre",nombre);
    return datosFormu;

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
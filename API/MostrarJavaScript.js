function mostrarPokemon(){
    let boton = document.getElementById("botonMostrar");
    boton.addEventListener("click", realizarPeticion);
}
function realizarPeticion() {
    let url = "MostrarPokemon.php";
    let solicitud = new XMLHttpRequest();
    let formulario = new FormData();
    formulario = mostrarFormulario();
    solicitud.open("POST", url, true);
    solicitud.send(formulario);
    solicitud.addEventListener("load", gestionarRespuesta);
}
function mostrarFormulario () {
    let datosFormu = new FormData();
    let miArray={};
    let json=JSON.stringify(miArray);
    datosFormu.append("mijsn",json);
    return datosFormu;

}function gestionarRespuesta(evento) {
    let misDatos = recogerDatos(evento);
     if (misDatos.status == 200 && misDatos.readyState==4) {
 
        rellenarContenido("cajamostrar",misDatos.responseText);
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
window.addEventListener("DOMContentLoaded", mostrarPokemon);






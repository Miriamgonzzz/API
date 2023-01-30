<?php
require "Conexion.php";

$dbConnect = new DbConnect();
$conn = $dbConnect->connect();

$id = $_POST["nombre"];


$nombrePokemon = $_POST["nombrePokemon"];
$numeroPokemon = $_POST["numeroPokemon"];
$tipoPokemon = $_POST["tipoPokemon"];
$generacionPokemon = $_POST["generacionPokemon"];
$habitatPokemon = $_POST["habitatPokemon"];


$query = "UPDATE pokemon SET nombrePokemon = ?, numeroPokemon = ?, tipoPokemon = ?, generacionPokemon = ?, habitatPokemon = ? WHERE nombrePokemon= ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("sissss", $nombrePokemon, $numeroPokemon, $tipoPokemon, $generacionPokemon, $habitatPokemon, $id);
if ($stmt->execute()) {
 echo "El Pokémon se ha actualizado correctamente.";
} else {
 echo "Ha ocurrido un error al actualizar el Pokémon.";
}

$conn->close();
    
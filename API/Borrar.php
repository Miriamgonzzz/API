<?php
require "Conexion.php";

$dbConnect = new DbConnect();
$conn = $dbConnect->connect();

$nombre = $_POST["nombre"];

$query = "DELETE FROM pokemon WHERE nombrePokemon = (?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $nombre);
if ($stmt->execute()) {

 echo "El Pokémon se ha eliminado correctamente.";
} else {

echo "Ha ocurrido un error al eliminar el Pokémon.";
}

$conn->close();
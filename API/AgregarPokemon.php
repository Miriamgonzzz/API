<?php

require "Conexion.php";

$dbConnect = new DbConnect();
$conn = $dbConnect->connect();

if (isset($_POST["nombrePokemon"]) && isset($_POST["numeroPokemon"]) && isset($_POST["tipoPokemon"]) && isset($_POST["generacionPokemon"]) && isset($_POST["habitatPokemon"])) {
 
    $nombrePokemon = $_POST["nombrePokemon"];
    $numeroPokemon = $_POST["numeroPokemon"];
    $tipoPokemon = $_POST["tipoPokemon"];
    $generacionPokemon = $_POST["generacionPokemon"];
    $habitatPokemon = $_POST["habitatPokemon"];

  $query = "INSERT INTO pokemon (nombrePokemon, numeroPokemon, tipoPokemon, generacionPokemon, habitatPokemon) VALUES (?, ?, ?, ?, ?)";
  $stmt = $conn->prepare($query);
  $stmt->bind_param("sisss", $nombrePokemon, $numeroPokemon, $tipoPokemon, $generacionPokemon, $habitatPokemon);

  if ($stmt->execute()) {
  
    echo "El Pokémon se ha agregado correctamente.";
  } else {
     echo "Ha ocurrido un error al agregar el Pokémon.";
  }
}
$conn->close();
?>
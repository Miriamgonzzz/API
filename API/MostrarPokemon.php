<?php

require "Conexion.php";

$dbConnect = new DbConnect();
$conn = $dbConnect->connect();

$query = "SELECT * FROM pokemon";
$result = $conn->query($query);

//$result->execute();

$datosPokemon = array();

while($row=mysqli_fetch_assoc($result)){
    $datosPokemon["Pokemons"][] = $row;
}

 $arr_person = json_encode($datosPokemon, true); 

 echo ($arr_person);
 $conn->close();
 ?>
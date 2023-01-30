<?php

// Clase para conectarse a la base de datos
class DbConnect {
  private $host = "127.0.0.1";
  private $username = "root";
  private $password = "";
  private $dbName = "pokemon";

  // Método para establecer la conexión a la base de datos
  public function connect() {
    $conn = new mysqli($this->host, $this->username, $this->password, $this->dbName);
    if ($conn->connect_error) {
      die("Error de conexión: " . $conn->connect_error);
    }else{
      echo "Conexion exitosa";
      return $conn;
    }
    
  }
}

?>




<?php
$servername = "localhost";
$username = "tu_usuario"; // Reemplaza con tu nombre de usuario de la base de datos
$password = "tu_contraseña"; // Reemplaza con tu contraseña de la base de datos
$dbname = "carrito_db";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>

<?php
// Configuración de conexión a la base de datos
$DB_SERVER = "localhost"; // Cambia esto si tu servidor de base de datos no está en el mismo servidor que tu aplicación
$DB_USERNAME = "root"; // Cambia esto si tu usuario de MySQL no es 'root'
$DB_PASSWORD = ""; // Cambia esto si tienes una contraseña para tu usuario de MySQL
$DB_DATABASE = "bd_deporte_andino";

// Crear una conexión a la base de datos
$conn = new mysqli($DB_SERVER, $DB_USERNAME, $DB_PASSWORD, $DB_DATABASE);

// Verificar la conexión
if ($conn->connect_error) {
    die("La conexión falló: " . $conn->connect_error);
}

echo "Conexión exitosa";

// Cerrar la conexión
$conn->close();
?>

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

// Recoger los datos del formulario y escapar caracteres especiales
$nombre = $conn->real_escape_string($_POST['nombre']);
$correo = $conn->real_escape_string($_POST['correo']);
$contrasena = $conn->real_escape_string($_POST['contrasena']);
$rol = $conn->real_escape_string($_POST['rol']);

// Validar que todos los campos están presentes
if (empty($nombre) || empty($correo) || empty($contrasena) || empty($rol)) {
    die("Todos los campos son obligatorios.");
}

// Hash de la contraseña para almacenarla de manera segura
$contrasena_hash = password_hash($contrasena, PASSWORD_DEFAULT);

// Preparar la consulta SQL para insertar los datos
$sql = "INSERT INTO usuarios (nombre, correo, contrasena, rol) VALUES (?, ?, ?, ?)";

// Preparar y ejecutar la consulta
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nombre, $correo, $contrasena_hash, $rol);

if ($stmt->execute()) {
    echo "Registro exitoso.";
} else {
    echo "Error: " . $stmt->error;
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>

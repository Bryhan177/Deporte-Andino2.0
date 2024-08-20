<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['name'];
    $direccion = $_POST['address'];
    $correo = $_POST['email'];
    $telefono = $_POST['phone'];
    $metodo_pago = $_POST['payment-method'];

    // Insertar datos en la base de datos
    $sql = "INSERT INTO clientes (nombre, direccion, correo, telefono, metodo_pago) VALUES ('$nombre', '$direccion', '$correo', '$telefono', '$metodo_pago')";

    if ($conn->query($sql) === TRUE) {
        echo "Compra registrada exitosamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>

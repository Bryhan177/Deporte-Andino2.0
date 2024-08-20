<?php
require 'conexion.php';

session_start();

$nombre = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

$q="SELECT COUNT(*) as contar from tabla_formulario_usuario where usuario = '$usuario' and contrasena = '$contrasena'";
$consulta = mysqli_query($conexion,$q);
$array = mysqli_fecth_array(consulta);

if ($array['contar']>0){

    $_SESSION['username'] = $usuario;
    
    header("location: ../index.php");
}else{
    echo "datos incorrectos";
}
?>
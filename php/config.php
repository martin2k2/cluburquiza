<?php

$Chost = "localhost"; 
$Cuser = "root";
$Cpass = "";
$Cdb = "id18593889_datos000"; 

/*$conexion = mysqli_connect("localhost", "root", "", "id18593889_datos000");
if ($conexion) {
    echo 'Conectado exitosamente a la Base de Datos';
} else {
    echo 'No se apodido conectar a la Base de Datos';
}*/


$con = mysqli_connect($Chost, $Cuser, $Cpass, $Cdb);
if ($con->connect_error) {
    echo "Ha ocurrido un error";
}
?>
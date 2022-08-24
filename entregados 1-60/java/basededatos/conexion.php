<?php 
 
$servidor = "localhost"; 
$usuario = "prueba"; 
$contrasenha = "prueba123"; 
$BD = "conectar"; 
 
$conexion = @mysql_connect($servidor, $usuario, $contrasenha); 
 
if (!$conexion) { 
    die('<strong>No pudo conectarse:</strong> ' . mysql_error()); 
}else{ 
    
    echo 'Conectado  satisfactoriamente al servidor <br />'; 
} 

mysql_select_db($BD, $conexion) or die(mysql_error($conexion)); 
 
?>
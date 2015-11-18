<?php require_once('conectar.php');?>

<?
if(isset($_POST['codigo']) && ($_POST['nip']!="")){
	$codigo=$_POST['codigo'];
	$nip=$_POST['nip'];
	
	$checa=sprintf("SELECT * FROM Usuario WHERE Codigo=".$codigo." AND Contrasena='".$nip."'");

	mysql_select_db($bd,$conexion);
	$resultado=mysql_query($checa,$conexion) or die (mysql_error());

	echo 1;
}
?>

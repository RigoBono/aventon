<?php
	$bd="AventonCUCEI";
	$host="http://192.168.0.113";
	$user="root";
	$pass="Rigo1994";
	$conexion=mysql_pconnect($host,$user,$pass) or trigger_error(mysql_error(),E_USER_ERROR);

echo "ok";
?>

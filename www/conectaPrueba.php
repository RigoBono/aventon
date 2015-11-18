<?
$link=mysql_connect($_POST['host'], $_POST['usr'], $_POST['pwd']);
mysql_select_db("AventonCUCEI",$link) or die ("Error: No es posible establecer la conexión");
echo 1;
?>

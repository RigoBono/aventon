function loggeoPrueba(){
	var arrayResult = mysql_select_query ("SELECT Nombre FROM Usuario WHERE Codigo=209529357");
	for (i=0; i< arrayResult.length; i++) {
    		var fila = arrayResult[i];
    		var columna = arrayResult[i][0];
		console.log(fila);
}
}

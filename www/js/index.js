function prueba(){
/*var arrayResult = mysql_select_query ("SELECT Nombre FROM Usuario WHERE Codigo=209529357");
for (i=0; i< arrayResult.length; i++) {
    var fila = arrayResult[i];
    var columna = arrayResult[i][0];
}*/
alert("hola");
}

function EnviarDatos(){
			var codigo=document.getElementById('codigo').value;
			var nip=document.getElementById('nip').value;
			
			$.ajax({
				type:'POST',
				url:"envia.php",
				data:('codigo='+codigo+'&nip='+nip),
				success:function(respuesta){
				if(respuesta==1){
					$('#mensaje').html('Accediste');
				}
				else{
					$('#mensaje').html('nel');
				}
				}
				
			});

		}
function conecta(){
	var mysql = require('mysql');
	var connection = mysql.createConnection({
   	host: '192.168.0.113',
   	user: 'root',
   	password: 'Rigo1994',
   	database: 'AventonCUCEI',
   	port: 3306
});
	connection.connect(function(error){
   	if(error){
		alert("Error");
      	throw error;
  	 }else{
      		alert('Conexion correcta.');
   	}
	});
connection.end();	
}

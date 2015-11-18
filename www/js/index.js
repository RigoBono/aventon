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
				
			})

		}
		function conecta(){
		$.ajax({
				type:'POST',
				url:"conectaPrueba.php",
				data:{host:'192.168.0.113',user:'root',pwd:'Rigo1994'},
				success:function(respuesta){
				if(respuesta==1){
					$('#mensaje').html('Accediste :D');
				}
				else{
					$('#mensaje').html(respuesta);;
				}
				}
				
			})
		}

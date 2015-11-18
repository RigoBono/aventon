function loggeo() {
	var codigo=document.getElementById("codigo").value;
	var nip=document.getElementById("nip").value;
	$.getJSON('http://192.168.0.113/VerPuntoDia.php',{ codigo: document.getElementById("codigo").value},function(data){
	console.log(JSON.stringify(data));
	var datos;
	var tr;
	for (var i = 0; i < data.length; i++) {
		console.log(data[i].Codigo);
		$("#dia").append("<option>"+data[i].Dia+"</option>");
		}	
			  
		});
}



function eliminaPunto() {
	$.getJSON('http://192.168.0.113/VerPuntoDia.php',{ codigo: document.getElementById("codigo").value},function(data){
	console.log(JSON.stringify(data));
	var datos;
	var tr;
	for (var i = 0; i < data.length; i++) {

		if(data[i].Dia==document.getElementById("dia").value)
		{
			var idPuntoPrev=data[i].idPunto;
			$.getJSON('http://192.168.0.113/EliminarPunto.php',{ idPunto: idPuntoPrev},function(datos){
				console.log(JSON.stringify(data));
				if(datos==1){ alert("Punto eliminado");}	
			  
			});
			$.getJSON('http://192.168.0.113/EliminaParteDe.php',{ idPunto: idPuntoPrev},function(datos){
				console.log(JSON.stringify(data));
				if(datos==1){ alert("Actualizacion hecha");}	
			  
			});
		}
		
		}	
			  
		});
}

function condicionInicial(){
document.getElementById("placas").disabled=true;

}

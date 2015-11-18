function loggeo() {
	var codigo=document.getElementById("codigo").value;
	var nip=document.getElementById("nip").value;
	$.getJSON('http://192.168.0.113/VerCarros.php',{ codigo: document.getElementById("codigo").value,nip:  document.getElementById("nip").value},function(data){
	console.log(JSON.stringify(data));
	var datos;
	var tr;
	for (var i = 0; i < data.length; i++) {
		console.log(data[i].Codigo);
		$("#placas").append("<option>"+data[i].Placa+"</option>");
		}	
			  
		});
	document.getElementById("placas").disabled=false;
}
function actualizaInfo(){
	$.getJSON('http://192.168.0.113/ActualizaCarro.php',{ 
		placa: document.getElementById("placas").value,
		modelo: document.getElementById("modelo").value,
		pasajeros: document.getElementById("pasajeros").value,
		capacidad: document.getElementById("capacidad").value,},function(data){
	if(data==1){
		alert("Datos modificados correctamente");
		}	
			  
		});

}

function cargaInfo(){
	$.getJSON('http://192.168.0.113/InfoCarro.php',{ placa: document.getElementById("placas").value},function(data){
	console.log(JSON.stringify(data));
	var datos;
	var tr;
	for (var i = 0; i < data.length; i++) {
		console.log(data[i].Codigo);
		document.getElementById("modelo").value=data[i].Modelo;
		document.getElementById("pasajeros").value=data[i].MaxPasajeros;
		
		document.getElementById("capacidad").value=data[i].Capacidad;
		}	
			  
		});

}

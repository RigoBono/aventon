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

function condicionInicial(){
document.getElementById("placas").disabled=true;

}

function eliminar() {
	var codigo=document.getElementById("codigo").value;
	var nip=document.getElementById("nip").value;
	$.getJSON('http://192.168.0.113/EliminarAuto.php',{ codigo: document.getElementById("codigo").value,nip:  document.getElementById("nip").value,placa: document.getElementById("placas").value},function(data){
	console.log(JSON.stringify(data));
	var datos;
	var tr;
	if(data==1){
	alert("Auto eliminado del sistema");
	}
	});
	setTimeout("location.href='sesionN.html'", 100);
}

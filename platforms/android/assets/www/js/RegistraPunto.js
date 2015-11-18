var lat=0.0;
var lon=0.0;
function validaVacios(){

valor = document.getElementById("codigo").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	alert("Campo codigo obligatorio");
  return false;
}

valor = document.getElementById("nip").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	alert("Campo nip obligatorio");
  return false;
}


return true;
}
function getPos(){

}

function loggeo() {
	var codigo=document.getElementById("codigo").value;
	var nip=document.getElementById("nip").value;
	$.getJSON('http://192.168.0.113/VerCarros.php',{ codigo: document.getElementById("codigo").value,nip:  document.getElementById("nip").value},function(data){
	console.log(JSON.stringify(data));
	var datos;
	var tr;
	for (var i = 0; i < data.length; i++) {
		console.log(data[i].Placa);
		$("#placas").append("<option>"+data[i].Placa+"</option>");
		}	
			  
		});
	document.getElementById("placas").disabled=false;
}

function RegistroBD() {
var lugar=document.getElementById("lugar").value;
var Particular=0;
var Publico=0;
if(lugar=='Publico'){
Publico=1;
}
else{
Particular=1;
}
	$.getJSON('http://192.168.0.113/RegistraAuto.php',
			{ 
				HoraIni: document.getElementById("horainicio").value,	
				HoraFin:  document.getElementById("horafin").value,	
				HoraViaje: document.getElementById("horaviaje").value,				
				particular: Particular,
				plazapublica: Publico,
				NumeroInterior: document.getElementById("interior").value,
				NombrePlaza: document.getElementById("plaza").value,
				Placas: document.getElementById("placas").value,
				
			},function(data){
			if(data==1){
					alert("Auto registrado en el sistema, ahora podras dar aventones a CUCEI!");
								
				}
			else{
				alert(data);
			}	
			  setTimeout("location.href='sesionN.html'", 100);
		});	
}


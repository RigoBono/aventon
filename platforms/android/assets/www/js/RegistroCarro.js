function validaVacios(){
valor = document.getElementById("placas").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	alert("Campo placas obligatorio");
 return false;
}

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

function valida(){
if(validaVacios()){
RegistroBD();
}

}


function validaSedan(){
var tipo=document.getElementById("tipovehiculo").value;
if(tipo=='Sedan'){
document.getElementById("tipocamioneta").disabled=true;
document.getElementById("capacidad").disabled=false;
}
else{
document.getElementById("tipocamioneta").disabled=false;
document.getElementById("capacidad").disabled=true;
}
}


function RegistroBD() {
	
	var tipoV=document.getElementById("tipovehiculo").value;
	var sedanS="";
	var camionetaS="";
	var tipoS=" ";
	if(tipoV=='Sedan'){
		sedanS='true';
		camionetaS='false';	
	}
	else{
		sedanS='false';
		camionetaS='true';
		tipoS=document.getElementById("tipocamioneta").value;
	}
	var nip=document.getElementById("nip").value;
	
	$.getJSON('http://192.168.0.113/RegistraAuto.php',
			{ 
				placas: document.getElementById("placas").value,	
				modelo:  document.getElementById("modelo").value,	
				maxP: document.getElementById("pasajeros").value,				
				sedan: sedanS,
				foto: 'NA',
				capacidad: document.getElementById("capacidad").value,
				camioneta: camionetaS,
				tipo: tipoS,
				codigo: document.getElementById("codigo").value,
				nip: document.getElementById("nip").value,
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






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

function validaFinalPeticiones(){
var band=restarHoras();
if(band==false){
return false;
}
}

function validaHoraViaje(){
  //inicio = document.getElementById("inicio").value;
	inicio=document.getElementById("horafin").value;
  	final=document.getElementById("horaviaje").value;

  inicioHoras = parseInt(inicio.substr(0,2));

  finHoras = parseInt(final.substr(0,2));

  transcurridoHoras = finHoras - inicioHoras;
	
	if(transcurridoHoras<0){
	alert("Hora de viaje invalida")
	return false;
	}
  
return true;
}

function restarHoras() {

	inicio=document.getElementById("horainicio").value;
  	final=document.getElementById("horafin").value;

  inicioHoras = parseInt(inicio.substr(0,2));

  finHoras = parseInt(final.substr(0,2));

  transcurridoHoras = finHoras - inicioHoras;
	
	if(transcurridoHoras<0){
	alert("Tiempo de final de peticiones invalido")
	return false;
	}
  
return true;

}


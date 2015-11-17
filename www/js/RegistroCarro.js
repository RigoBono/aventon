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

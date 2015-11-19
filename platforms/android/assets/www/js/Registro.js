var pictureSource;   // Permitirá obtener la Fuente de la Foto
var destinationType; // Permitirá Definir el formato de retorno



function validaCampos()
{
var vacios=validaVacios();
var email=true;
var num=validaNum();
var nip=validaNips();
if(vacios && nip && num){
	alert("Campos validados");
	RegistroBD();
}else
	alert("Error en campos")
}

function validaNips(){
valor = document.getElementById("nip").value;
valor2 = document.getElementById("nipconf").value;
if(valor != valor2)
{
alert("Nips no coinciden");
return false;
}
return true;
}

function validaEmail(){
valor = document.getElementById("email").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
alert("Email no valido");
  return false;
}
return true;
}

function validaNum(){
valor = document.getElementById("tel").value;
if( isNaN(valor) ) {
  alert("Celular no valido");
  return false;
}
valor = document.getElementById("codigo").value;
if( isNaN(valor) ) {
  alert("Codigo no valido");
  return false;
}
return true;
}


function validaVacios(){
valor = document.getElementById("nombre").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	alert("Campo nombre obligatorio");
 return false;
}

valor = document.getElementById("codigo").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	alert("Campo codigo obligatorio");
  return false;
}

valor = document.getElementById("email").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	alert("Campo email obligatorio");
  return false;
}

valor = document.getElementById("nip").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	alert("Campo nip obligatorio");
  return false;
}

valor = document.getElementById("nipconf").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	alert("Campo de confirmacion de nip obligatorio");
  return false;
}
return true;
}

function validaProfe(){
var alumnoS=document.getElementById("alumno").value;
	if(alumnoS=='No'){
		document.getElementById("semestre").disabled=true;
	}else{
		document.getElementById("semestre").disabled=false;
	}
}

function RegistroBD() {
	
	var alumnoS=document.getElementById("alumno").value;
	var semestreS;
	if(alumnoS=='Si'){
		alumnoS='true';	
		semestreS=document.getElementById("semestre").value;
	}
	else{
		alumnoS='false';
		semestreS="NA";
	}
	var nip=document.getElementById("nip").value;
	
	$.getJSON('http://192.168.0.113/RegistraUsuario.php',
			{ 
				codigo: document.getElementById("codigo").value,
				nip:  document.getElementById("nip").value,
				nombre: document.getElementById("nombre").value,				
				apellidoM: document.getElementById("apellidoM").value,
				apellidoP: document.getElementById("apellidoP").value,
				email: document.getElementById("email").value,
				celular: document.getElementById("tel").value,
				sexo: document.getElementById("sexo").value,
				alumno: alumnoS,
				fotoC: 'NA',
				semestre: semestreS	
			},function(data){
			if(data==1){
					alert("Bienvenido!(a)");
								
				}
			else{
				alert("nel");
			}	
			  setTimeout("location.href='sesionN.html'", 100);
		});
	
}


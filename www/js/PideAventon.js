var lat=0;
var lon=0;
var idP=0;
function pide(){
pedirAventon();
registraViaje()
}

function registraViaje(){
var date=new Date();
var ID=date.getHours()+date.getMinutes()+date.getSeconds();
alert(ID);
$.getJSON('http://192.168.0.113/RegistraViaje.php',{id: ID,idPunto: idP,codigo: document.getElementById("codigo").value},function(data){
	console.log(JSON.stringify(data));
	if(data==1){
		alert("Tu aventon esta registrado, por favor entra a informacion de aventon para mas informacion");
	}
	else
		alert("Ocurrio un error de red, intentalo mas tarde");
	});
}


function pedirAventon(){
	$.getJSON('http://192.168.0.113/SolicitaAventon.php',{ Lat: lat,Lon:lon},function(data){
	console.log(JSON.stringify(data));
	for (var i = 0; i < data.length; i++) {
		idP=data[i].idPuntoInicioRuta;
		}	
			  
		});

}

function cargaLoc()
{
navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {
	lat=position.coords.latitude;
	lon=position.coords.longitude;
	alert("Carga exitosa");
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }

function loggeo() {
	var codigo=document.getElementById("codigo").value;
	var nip=document.getElementById("nip").value;
	$.getJSON('http://192.168.0.113/loggeo.php',{ codigo: document.getElementById("codigo").value,nip:  document.getElementById("nip").value},function(data){
	console.log(JSON.stringify(data));
	var datos;
	var tr;
	for (var i = 0; i < data.length; i++) {
		console.log(data[i].Codigo);
		alert("Hola "+data[i].Nombre+" Estamos procesando tu peticion");
		}	
			  
		});

	setTimeout("location.href='sesionN.html'", 100);
}


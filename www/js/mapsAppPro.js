
var lat=0.0
var lon=0.0
var idP=0;
function accion(){
var seleccion=document.getElementById("MenuPrincipal").value;
if(seleccion=='Ver ubicacion'){
alert("si")
cargaMapa();
}
if(seleccion=='Registrar automovil'){
setTimeout("location.href='RegistraAuto.html'", 100);
}
if(seleccion=='Registrar punto de encuentro para aventon'){
setTimeout("location.href='RegistraPunto.html'", 100);
}
if(seleccion=='Eliminar automovil'){
setTimeout("location.href='EliminarAuto.html'", 100);
}
if(seleccion=='Eliminar punto de encuentro para aventon'){
setTimeout("location.href='EliminarPunto.html'", 100);
}
if(seleccion=='Ver informacion del viaje de hoy'){
setTimeout("location.href='Informacion.html'", 100);
}
if(seleccion=='Modificar automovil'){
setTimeout("location.href='ModificaAuto.html'", 100);
}
if(seleccion=='Solicitar aventon'){
setTimeout("location.href='PideAventon.html'", 100);;
}

}

function pedirAventon(){
	$.getJSON('http://192.168.0.113/SolicitaAventon.php',{ Lat: lat,Lon:lon},function(data){
	console.log(JSON.stringify(data));
	for (var i = 0; i < data.length; i++) {
		alert("Tu aventon sera " +data[i].idPuntoInicioRuta);
		}	
			  
		});

}

function cargaLoc()
{
navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function muestraLatLon(){
alert("Lon "+lon+ " Lat "+lat);
cargaMapa();
}

function cargaMapa()
{
var map = new mxn.Mapstraction('map', 'openlayers');
		var latlon = new mxn.LatLonPoint(lat, lon);
		var point = new mxn.LatLonPoint(lat, lon);
		map.setCenterAndZoom(latlon, 17);
		marker = new mxn.Marker(latlon);
      		map.addMarker(marker);
      		marker.addData({'infoBubble': 'Tu estas aqui!'})
      		marker.openBubble()
}


function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
	lat=position.coords.latitude;
	lon=position.coords.longitude;
	alert("Carga exitosa");
	cargaMapa();
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }


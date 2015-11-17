
var lat=0.0
var lon=0.0


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


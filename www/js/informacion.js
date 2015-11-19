
var lat=0.0
var lon=0.0
var latP=0;
var lonP=0;
var hora="10:00";
var idP=0;


function accionIni(){
infoPunto();

}
function infoIdPunto(){
	$.getJSON('http://192.168.0.113/InformacionViaje.php',{ idPunto: idP},function(data){
	console.log(JSON.stringify(data));
	for (var i = 0; i < data.length; i++) {
		idP=data[i].idP;
		latP=data[i].Latitud;
		lonP=data[i].Longitud;
		hora=data[i].Hora;
		cargaMapa();
		}		  
		});

}

function Pasajeros(){
	$.getJSON('http://192.168.0.113/Pasajeros.php',{ idPunto: idP},function(data){
	console.log(JSON.stringify(data));
	for (var i = 0; i < data.length; i++) {
		$("#Pasajeros").append("<option>"+data[i].Nombre+" ,"+data[i].Codigo+"</option>");
		}		  
		});

}


function infoPunto(){
	$.getJSON('http://192.168.0.113/Informacion.php',{ codigo: document.getElementById("codigo").value},function(data){
	console.log(JSON.stringify(data));
	for (var i = 0; i < data.length; i++) {
		idP=data[i].idP;
		infoIdPunto();
		Pasajeros();
		}			  
		});
}
function cargaMapa()
{
		//ObtenPuntoHoy()
if(latP!=0){
		var map = new mxn.Mapstraction('map', 'openlayers');
		var latlonP = new mxn.LatLonPoint(latP, lonP);
		map.setCenterAndZoom(latlonP, 17);
		markerP = new mxn.Marker(latlonP);
		map.addMarker(markerP);
		markerP.addData({'infoBubble': 'El punto de encuentro es aqui!'});
      		markerP.openBubble();
}
}

function obtenerHora(){


}

function mostrarHora()
{
obtenerHora();
alert(hora);

}


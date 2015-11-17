
var lat=0.0
var lon=0.0
var latP=20.658275;
var lonP=-103.300255;
var hora="10:00";

function accion(){
var seleccion=document.getElementById("MenuPrincipal").value;
if(seleccion=='Ver ubicacion'){
alert("si")
cargaMapa();
}
if(seleccion=='Hora del viaje'){
mostrarHora();
}


}
function cargaMapa()
{
		//ObtenPuntoHoy()
		var map = new mxn.Mapstraction('map', 'openlayers');
		var latlonP = new mxn.LatLonPoint(latP, lonP);
		map.setCenterAndZoom(latlonP, 17);
		markerP = new mxn.Marker(latlonP);
		map.addMarker(markerP);
		markerP.addData({'infoBubble': 'El punto de encuentro es aqui!'});
      		markerP.openBubble();
}

function obtenerHora(){


}

function mostrarHora()
{
obtenerHora();
alert(hora);

}


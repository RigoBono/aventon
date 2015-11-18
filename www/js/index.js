function loggeo() {
	var codigo=document.getElementById("codigo").value;
	var nip=document.getElementById("nip").value;
	$.getJSON('http://192.168.0.113/loggeo.php',{ codigo: document.getElementById("codigo").value,nip:  document.getElementById("nip").value},function(data){
	console.log(JSON.stringify(data));
	var datos;
	var tr;
	for (var i = 0; i < data.length; i++) {
		console.log(data[i].Codigo);
		alert("Hola "+data[i].Nombre);
		}	
			  
		});

	setTimeout("location.href='sesionN.html'", 100);
}

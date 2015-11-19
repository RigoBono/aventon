function loggeo() {
	var codigo=document.getElementById("codigo").value;
	$.getJSON('http://192.168.0.113/BajaCuenta.php',{ codigo: document.getElementById("codigo").value},function(data){
	console.log(JSON.stringify(data));
	var datos;
	var tr;
	if(data==1)
	{
		alert("Cuenta eliminada");
		setTimeout("location.href='index.html'", 100);
	}
});
	
}

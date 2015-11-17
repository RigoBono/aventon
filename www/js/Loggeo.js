function loggeoPrueba(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});

	var output = $('#output');

	$.ajax({
		url: '192.168.0.113/landmarks.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
				var landmark = '<h1>'+item.name+'</h1>'
				+ '<p>'+item.latitude+'<br>'
				+ item.longitude+'</p>';
			
				output.append(landmark);
			});
		},
error: function(err, textStatus, errorThrown) {
                 output.text("There was an error [" + textStatus + "] loading the data.");
                 console.log(err);
                 console.log(errorThrown);
              } 
	});
}

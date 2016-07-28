$( document ).ready(function() {

	var List = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

    console.log( "ready!" );

    List.forEach(function logArrayElements (element, index, a) {
    	console.log('a[' + index + '] = ' + element);
    	
    });


    Get_Data();


});

function Get_Data(){
	
	console.log("function ready");

	$.getJSON('https://api.twitch.tv/kraken/channels/ESL_SC2', function(data) {
  		console.log(data);
	});



};


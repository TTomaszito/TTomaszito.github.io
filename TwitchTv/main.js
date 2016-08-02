

$( document ).ready(

	function Main() {

		var List = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

    	console.log( "ready!" );

    	Get_Data();



	function Get_Data(){
		

		List.forEach(function logArrayElements (channel, index, a) {

		    $.getJSON('https://api.twitch.tv/kraken/streams/'+ channel, function(data) {
		    	
		  		console.log(data);
		  		
		  		$("#results").append("results are available");
				
			});
	    	
	    });

	};

});
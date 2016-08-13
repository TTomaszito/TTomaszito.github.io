

$( document ).ready(

	function Main() {

		var List = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

    	Get_data_initial();

    	$("#All_Button").click(function(event){
			event.preventDefault();
			console.log("all");
			Get_data_initial();
			
		});

		$("#Online_Button").click(function(event){
			event.preventDefault();
			console.log("online");
			Get_data_online();
		});

		$("#Offline_Button").click(function(event){
			event.preventDefault();
			console.log("offline");
			Get_data_offline();
		});


	// Initial function get All results data

	function Get_data_initial(){

		$("#Results").empty();
		

		List.forEach(function logArrayElements (channel, index, a) {

		    $.getJSON('https://api.twitch.tv/kraken/streams/'+ channel, function(data) {

		    var channel_div = "#"+channel;

		    var Left_channel_div = "#" + "left" +channel
		    var Center_channel_div = "#" + "Center" +channel
		    var Right_channel_div = "#" + "Right" +channel

		    var channel_button = "#"+channel + "-btn"
		    

		    $("#Results").append(

		    	"<div" +" "+ "class=row"+" "+"id=" + channel + ">" +  "</div>"

		    );

		    $(channel_div).addClass("channel-div");



		    $(channel_div).append(

		    	"<div class=" + "col-xs-4" +" "+"id=Left"+ channel+ ">" + "sentence2" + "</div>"+
		    	"<div class=" + "col-xs-4" +" "+"id=Center" + channel+">" + "sentence3" + "</div>"+
		    	"<div class=" + "col-xs-4" +" "+"id=Right"+ channel+ ">" + "</div>"

		    );

		    $(Right_channel_div).append(

		    	"<button id=" + channel +"-btn" + ">"+"Watch" +"</button>"

		    );


		   $(channel_button).click(function(event){
				event.preventDefault();
				$("#test").empty();

				var Livestream = $('<iframe class="livestream" src="https://www.twitch.tv/'+ 
				channel +'/embed" frameborder="0" scrolling="no" height="720" width="1080" align="middle"></iframe>');

				 $("#test").append(Livestream);


				
			});
				
		  		
		  	this.stream_status = data;
		  	console.log(this.stream_status);


				
			});
	    	
	    });

	};
	 
	// Function that gets all brodcasters that are "online"

	function Get_data_online(){

		$("#Results").empty();

		List.forEach(function logArrayElements (channel, index, a) {

		    $.getJSON('https://api.twitch.tv/kraken/streams/'+ channel, function(data) {

		     
		    	
		  	$("#Results").append("Results are online");	
		  	/*	
		  	   if (data.stream) {
		    	console.log("succes");
			};
			if (data.stream == null) {} {
				console.log("null")
			};	
			*/
		  	this.stream_status = data;
		  	console.log("onlin");
		  	});
	    	
	    });

	};

	// Function that gets all brodcasters that are "offline or inactive"

	function Get_data_offline(){

		$("#Results").empty();

		List.forEach(function logArrayElements (channel, index, a) {

		    $.getJSON('https://api.twitch.tv/kraken/streams/'+ channel, function(data) {

		    
		    	
		  	$("#Results").append("results are offline");	
		  		
		  		

		  	this.stream_status = data;
		  	console.log("offline");
		  	});
	    	
	    });

	};




});




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

		    var channel_DIV = "#"+channel+"myDIV";
		    var channel_watch_btn =  "#"+channel+"btn";


		    $("#Results").append(

		    	"<div class=" + "Results-channel" + " " + "id=" + channel + "myDIV" + "/>" + "</div>" 
		    );

		    $(channel_DIV).append(

		    	"<div id="+ channel +">" +"sentence"+ "</div>" +

		    	"<button id=" + channel + "btn"+ ">" + "Watch Stream" + "</button>" 

		    );


		    $(channel_watch_btn).click(function(event){
				event.preventDefault();
				console.log("click" + channel);
			});
				
		    	 
					    	
		  	
		  		
		  	this.url = "http://twitch.tv/"+ channel;	
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


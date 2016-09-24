
$("#video_controls").hide();
$("#Lights_Off").toggle(false);

$( document ).ready(

	function Main() {

		var List = ["ESL_SC2","Admiral_Bahroo", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
		var key ='?client_id=ppxdre5syg8v8d5dtkekx8govyvshgv'
		

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

		var key ='?client_id=ppxdre5syg8v8d5dtkekx8govyvshgv'
		

		List.forEach(function logArrayElements (channel, index, a) {

		    $.getJSON('https://api.twitch.tv/kraken/streams/'+ channel + key, function(data) {

			    var channel_div = "#"+channel;

			    var Left_channel_div = "#" + "Left" +channel
			    var Center_channel_div = "#" + "Center" +channel
			    var Right_channel_div = "#" + "Right" +channel

			    var channel_button = "#"+channel + "-btn"
			    

			    AppendStructure(channel,channel_button,channel_div,Center_channel_div,Right_channel_div);


	 			if(data.stream == null){
	 				console.log("no data")

	 				LogoUnavailable(Left_channel_div);
	 			}
	 				 
	 			else{
	 				console.log(data.stream.channel.logo)

	 				LogoAvailable(Left_channel_div,data)
	 			};


			   	$(channel_button).click(function(event){

			   		ShowVideo(channel);
				});

			   	CloseVideo();
			   	LightsOff();
				
 
			});
	    	
	    });

	};
	 
	// Function that gets all brodcasters that are "online"

	function Get_data_online(){

		$("#Results").empty();

		List.forEach(function logArrayElements (channel, index, a) {

		       $.getJSON('https://api.twitch.tv/kraken/streams/'+ channel + key, function(data) {

			    var channel_div = "#"+channel;

			    var Left_channel_div = "#" + "Left" +channel
			    var Center_channel_div = "#" + "Center" +channel
			    var Right_channel_div = "#" + "Right" +channel

			    var channel_button = "#"+channel + "-btn"
			    
			    if(data.stream !== null){			    

				    AppendStructure(channel,channel_button,channel_div,Center_channel_div,Right_channel_div);


		 			if(data.stream == null){
		 				console.log("no data")

		 				LogoUnavailable(Left_channel_div);
		 			}
		 				 
		 			else{
		 				console.log(data.stream.channel.logo)

		 				LogoAvailable(Left_channel_div,data)
		 			};


				   	$(channel_button).click(function(event){

				   		ShowVideo(channel);
					});

				   	CloseVideo();
				   	LightsOff();

				    
				};
 
			});
	    	
	    });

	};

	// Function that gets all brodcasters that are "offline or inactive"

	function Get_data_offline(){

		$("#Results").empty();

		List.forEach(function logArrayElements (channel, index, a) {

		       $.getJSON('https://api.twitch.tv/kraken/streams/'+ channel + key, function(data) {

			    var channel_div = "#"+channel;

			    var Left_channel_div = "#" + "Left" +channel
			    var Center_channel_div = "#" + "Center" +channel
			    var Right_channel_div = "#" + "Right" +channel

			    var channel_button = "#"+channel + "-btn"
			    
			    if (data.stream == null) {

					AppendStructure(channel,channel_button,channel_div,Center_channel_div,Right_channel_div);


		 			if(data.stream == null){
		 				console.log("no data")

		 				LogoUnavailable(Left_channel_div);
		 			}
		 				 
		 			else{
		 				console.log(data.stream.channel.logo)

		 				LogoAvailable(Left_channel_div,data)
		 			};


				   	$(channel_button).click(function(event){

				   		ShowVideo(channel);
					});

				   	CloseVideo();
				   	LightsOff();
				
				};
 
			});
	    	
	    });

	};

});


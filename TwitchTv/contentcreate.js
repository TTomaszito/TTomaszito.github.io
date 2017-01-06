


function CloseVideo(){

	$("#Off_Video_Button").on("click",function(){

   		$("#video").empty();
   		$("#video_controls").hide();

   	});
};



function LightsOff(){
	$("#Cinema_Mode").on("click",function(event){
   		event.stopPropagation();

   		$("#Lights_Off").toggle(true);

   	});
   	$("body").on('click', function (event) {

		$("#Lights_Off").toggle(false);
	});
};


function ShowVideo(channel){



	var Livestream = $('<iframe class="livestream" src="https://player.twitch.tv/'+'?channel='+ 
	channel +'" frameborder="0" scrolling="no" height="720" width="1080" align="middle"></iframe>');
	
	event.preventDefault();

	$("#video").empty();

	$("#video").append(

		"<div class=" + "video-container" +" "+"id="+"video_stream" + "></div>"

	);

	$("#video_controls").show();


	$("#video_stream").append(Livestream);

};


function LogoUnavailable(Left_channel_div){

	$(Left_channel_div).append(

		"<img class="+"img-responsive center-block"+" "+"style=" + "height:100px;" +" "+ "src="+ 
		"http://s.jtvnw.net/jtv_user_pictures/hosted_images/GlitchIcon_PurpleonWhite.png" +">" 

	);
};

function LogoAvailable(Left_channel_div,data){
	$(Left_channel_div).append(

		"<img class="+"img-responsive center-block"+" "+"style=" + "height:100px;" +" "+ "src="+ 
		data.stream.channel.logo +">"  

	);
};

function AppendStructure(channel,channel_button,channel_div,Center_channel_div,Right_channel_div){
	$("#Results").append(

    	"<div" +" "+ "class=row"+" "+"id=" + channel + ">" +  "</div>"

    );

    $(channel_div).addClass("channel-div");



    $(channel_div).append(

    	"<div class=" + "col-xs-4" +" "+"id=Left"+ channel+ ">" + "</div>"+
    	"<div class=" + "col-xs-4" +" "+"id=Center" + channel+">" + "</div>"+
    	"<div class=" + "col-xs-4" +" "+"id=Right"+ channel+ ">" + "</div>"

    );

    $(Right_channel_div).append(

    	"<button id=" + channel +"-btn" + ">"+"Watch" +"</button>"

    );
    $(channel_button).addClass("channel_Button");


    $(Center_channel_div).append(

    	"<p id=" + channel +"-name" + " " +"style=" + "padding-top:35px;padding-bottom:35px;"+">"+ channel.toString() +"</p>"
    	

    );
};
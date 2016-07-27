$( document ).ready(function() {

    console.log( "ready!" );
    Get_Data();


});

function Get_Data(){
	console.log("function ready");

	$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
  		console.log(data);
	});



};
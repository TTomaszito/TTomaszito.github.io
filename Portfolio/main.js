window.onload = function preload(){

	ImageArray = ['public/contact.jpeg','public/intro.jpeg']
	ContactImage = new Image()
	IntroImage = new Image()

	ContactImage.src =ImageArray[0];
	IntroImage.src= ImageArray[1];
	
	imageLoad()

	$("#submitbutton").click(function(event){
		event.preventDefault(); //Prevents page from reloding everytime function runs on click event
		var name = $('#name').val()
		var email = $('#email').val()
		var text = $('#message').val()
		
		var message = {"name":name,"email":email,"text":text}

		var saveData = $.ajax({
		    type: "POST",
		    url: "http://localhost:3000/mail",
		    data: message,
	        dataType: "json",
   	        success: function(Data){
		        console.log(Data)
		    }
		});
	})
		


	$(window).on('scroll', function () {
	    imageLoad()
	});
}




/// helper functions

function imageLoad(){
	var scrollTop     = $(window).scrollTop(), // 
	    elementOffset = $('.strip2').offset().top,
		distance      = (elementOffset - scrollTop);

	    if (distance < 0) {
			$('body').css('background-image', 'url('+ IntroImage.src +')');
		}
		else{
			$('body').css('background-image', 'url('+ ContactImage.src +')');
	}
}
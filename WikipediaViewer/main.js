$(document).ready(function() {

  	// Fetch random wikipedia Article 
  	$("#RandomArticle").on("click", function() {
  		var link = "https://en.wikipedia.org/wiki/Special:Random"
  		window.open(link);

  	});

  // search keyword return results

  	$('#target').submit(function(event) {
	  	event.preventDefault();

	  	var search_term = $("#SearchTerm").val();
	  	var results_number = $("#SearchNumber").val();

 
	  	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
	  		search_term + "&limit=" +
	  		results_number + "&format=json&callback=?";

	  	$.ajax({

	  		url: url,
	  		dataType: 'jsonp',
	  		type: 'POST',

	  		success: function(results) {

	  			console.log(results);

	        	 // empty's the div on every new search.
	        	$("#SearchResult").empty();
	        	$("#SearchResult").css("background-color","#b3ffcc");
	        	console.log(results)
	        	 

	        	for (i = 0; i < results_number; i++) {
		        	var title = results[1][i];
		        	var summary = results[2][i];
		        	var link = results[3][i];
		        	
		        	$("#DisplayArticles").append('<div id="SearchResult">');
		        	$("#SearchResult").append('<a class="title"' +'href="' + link +'">' + title + '</a>');
		        	$("#SearchResult").append('<p class="summary">'+ summary + '</p>');
					$("#DisplayArticles").append('</div>');

		        	if (title === undefined){

		        		$("#SearchResult").empty();
		        		$("#SearchResult").css("background-color","black");

		        	};

	        	};


    		}
		});

  	});

});
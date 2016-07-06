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

	  	console.log(search_term,results_number);

	  	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + "%22+" +
	  		search_term + "+%22&limit=" +
	  		results_number + "&format=json&callback=?";

	  	$.ajax({

	  		url: url,
	  		dataType: 'jsonp',
	  		type: 'POST',

	  		success: function(results) {

	        	 // empty's the div on every new search.
	        	$("#SearchResult").empty();
	        	$("#SearchResult").css("background-color","#b3ffcc");
	        	 

	        	for (i = 0; i < results_number; i++) {
		        	var title = results[1][i];
		        	var summary = results[2][i];
		        	var link = results[3][i];

		        	$("#DisplayArticles").append('<div id="SearchResult">');
		        	$("#SearchResult").append('<a class="title"' +'href="' + link +'">' + title + '</a>');
		        	$("#SearchResult").append('<p class="summary">'+ summary + '</p>');
					$("#DisplayArticles").append('</div>');


	        	};


    		}
		});

  	});

});
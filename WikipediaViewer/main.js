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

	        	$("#DisplayArticles").empty(); // empty's the div on every new search.

	        	for (i = 0; i < results_number; i++) {
		        	var title = results[1][i];
		        	var summary = results[2][i];
		        	var link = results[3][i];
		        	console.log(results)

		        	$("#DisplayArticles").append('<a class="title"' +'href="' + link +'">' + title + '</a>');
		        	$("#DisplayArticles").append('<div class="summary">'+ summary + '</div>');

		        	if (title == undefined){

		        		$("#DisplayArticles").empty();
		        	};

		        	if (summary === ""){

		        		$("#DisplayArticles").pop();
		        	};

		        	

	        	};


    		}
		});

  	});

});
$(document).ready(function() {

  // Fetch random wikipedia Article 
  $("#random_article").on("click", function() {
    var link = "https://en.wikipedia.org/wiki/Special:Random"
    window.open(link);

  });

  $('form').submit(
    function(event) {
      event.preventDefault();
      var search_term= $("#Search_term").val();
      console.log(search_term)

      
      var results_number = "5";

      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + "%22+" +
        search_term + "+%22&limit=" +
        results_number + "&format=json&callback=?";

      $.ajax({

        url: url,
        dataType: 'jsonp',
        type: 'POST',
        headers: {
          'Wikiviewer': 'myviewer1'
        },
        success: function(results) {
          console.log(results)

        }
      });
    });

});


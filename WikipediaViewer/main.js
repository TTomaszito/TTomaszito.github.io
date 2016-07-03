$(document).ready(function() {

  // Fetch random wikipedia Article 
  $("#random_article").on("click", function() {
    var link = "https://en.wikipedia.org/wiki/Special:Random"
    window.open(link);

  });

  // search keyword return results

  $('#target').submit(function(event) {
    event.preventDefault();

    var search_term = $("#Search_term").val();
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

        $("#display_articles").empty(); // empty's the div on every new search.

        for (i = 0; i < results_number; i++) {
          var title = results[1][i];
          var summary = results[2][i];
          var link = results[3][i];

          $("#display_articles").append('<div class="title">' + title + '</div>');
          $("#display_articles").append('<div class="summary">'+ summary + '</div>');
          $("#display_articles").append('<div class="link">'+ link + '</div>');

          // $("<div id='article' />").text(results[1][i]).appendTo("#display_articles");

        };


      }
    });
  });

});
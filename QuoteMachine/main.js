$(document).ready(function() {

  var author, quote, twitterFormatedQuote;

  // Conects to the Forismatic API, gets Json.
  // Assigns the values to the quote and author variables.

  $("#QuoteButton").on("click", function() {

    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
      function(json) {

        author = "\-" + json.quoteAuthor;
        quote = "\"" + json.quoteText + "\"";

        QuoteNormalizer();

        $("#Quote").html(quote);
        $("#Author").html(author);

        lengthWarning();

      });

  });

  // Activates the "Tweet" button. 
  //Modifies the quote so that is ready to be tweeted once on the Twitter page.
  // Blocks quotes that are too long to tweet by displaying "Quote is to long to Tweet".
  // After to long message waits 2 seconds before returning the current quote.

  $("#tweetButton").on("click", function() {

    if (quote === undefined) {
      $("#Quote").html("You must first get a new quote before you can Tweet it!");
    };

    twitterFormatedQuote = quote.replace(/\s+/g, "%20");
    var link = 'https://twitter.com/intent/tweet?text=' + twitterFormatedQuote;

    if (quote.length >= 140) {
      $("#Quote").html("Quote is to long to Tweet");
 
      var timer = setInterval(myTimer, 2000);
      function myTimer(){$("#Quote").html(quote);
      clearInterval(timer);
       };
     };

    if (quote.length <= 140) {
      window.open(link);

    };

  });

  // Normalizez the quote removes special characters that would interfere 
  //with preloding the quote in the Twtter website.

  function QuoteNormalizer() {

    quote = quote.replace(";", ",");
    quote = quote.replace("$", " ");
    quote = quote.replace("-", " ");
 
    return   quote;

  };

  // Warns the user when the character count is bigger then supported by twitter.
  //the character count is displayed in red.

  function lengthWarning() {
    if (quote.length >= 140) {

      var string = quote.length.toString()
      string = string.fontcolor("red");
      $("#CharacterCount").html(string + ' Characters');

    };
    if (quote.length <= 140) {

      $("#CharacterCount").html(quote.length + ' Characters');

    };
  };
});
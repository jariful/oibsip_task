function displayRandomQuote() {
    var quotes = [
      "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
      "You have to dream before your dreams can come true.",
      "Don't take rest after your first victory because if you fail in the second, more lips are waiting to say that your first victory was just luck."
    ];
  
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];
  
    var quoteContainer = document.getElementById("quote-container");
    quoteContainer.innerHTML = '"' + quote + '"';
  }
  
  // Call the displayRandomQuote function on page load
  window.onload = function () {
    displayRandomQuote();
  };
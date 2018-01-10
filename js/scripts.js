// Business (or back-end) logic:

var cup = function(number) {
  return number/2
};

var quart = function(number) {
  return (number/2);
};

var gallon = function(number) {
  return (number/.25);
};


// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#cups").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#cup").val());
    var result = cup(number);
    $("#output").text(result);
  });
});

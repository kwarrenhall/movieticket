// business logic
  var Ticket = function( movie, time, age ) {
    this.movie = parseInt(movie);
    this.time = parseInt(time);
    this.age = parseInt(age);
  };
  Ticket.prototype.price = function() {
    var totalPrice = 10;
    if (this.time > 24) {
      alert("Use a valid time!");
    }
    if (this.age > 10 && this.age < 69){
      totalPrice += 2;
    }
    if (this.movie === 1){
       totalPrice += 5;
    }
    if (this.time > 16){
      totalPrice += 3;
    }
    return totalPrice;
  };

// user interface logic
$(document).ready(function(){
  $("form#movie-select").submit(function(){
    event.preventDefault();
    var movie = $("input:radio[name=movieInput]:checked").val();
    var time = $("#new-time").val();
    var age = $("#new-age").val();
    var ticket = new Ticket (movie, time, age);

    $('.movie').text(ticket);
    $('.time').text(time);
    $('.price').text(ticket.price());
  });
});

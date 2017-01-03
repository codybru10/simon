var Simon = require('./../js/simon.js').gameModule;

var SimonGame = new Game(10);
var newPlayer = new Player();

$(document).ready(function() {

  $('.start').click(function() {
    function countDown() {
      var i = 3;
      var gameCountdown = setInterval(function() {
        console.log("setInterval()");
        $('#countdown').text(i);
        if (i === 0) {
                clearInterval(gameCountdown);
                $('#countDown').empty();
            }
        else {
            $('#countDown').append(i);
            i--;
        }
      }, 1000);
    }

    countDown();
  });

  $('.grid').click(function() {
    console.log(this);
  });

});

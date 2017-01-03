(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Game() {
  this.gameName = "Simon";
  this.turn = 1;
}

// SimonGame.prototype.AI = function(){
//   return Math.floor(Math.random() * 4) + 1;
// }

exports.gameModule = Game;

},{}],2:[function(require,module,exports){
var Simon = require('./../js/simon.js').gameModule;

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

},{"./../js/simon.js":1}]},{},[2]);

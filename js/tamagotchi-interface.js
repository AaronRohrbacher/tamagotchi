import { FeedIt } from './../js/tamagotchi.js';
var apiKey = require('./../.env').apiKey;
let mithu = new FeedIt("Mithu");
mithu.setTime()


setInterval(function() {
 $('#foodLevel').text(mithu.foodLevel);
 $('#waterLevel').text(mithu.waterLevel);
 $('#playLevel').text(mithu.playLevel);
 $('#counter').text(mithu.counter);
 if(mithu.foodLevel < 1 || mithu.waterLevel < 1 || mithu.playLevel <1 || mithu.counter < 1) {
   $('#game').slideUp();
   $('#DEATH').slideDown();
 }
});

$(document).ready(function() {
  $("#takeCare").submit(function(event) {
    event.preventDefault();
    mithu.takeCare();
let query = $('#name').val();
  $.ajax({
      url: `http://api.giphy.com/v1/gifs/translate?s=dead+${query}&api_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        let img = response.data.images.fixed_width.url
        $('#image').append(`<img src='${img}'>`);
      },
      error: function() {
        $('#image').text("There was an error processing your request. Please try again.")
      }
  });
});
});

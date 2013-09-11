$(document).ready(function() {

$('form').submit(function(event){
  event.preventDefault();
  tweet = $(this).children('textarea').val();
  var url = "/tweet";
  $.post(url, {tweet: tweet}, function(response){
    // console.log(data);
    $("#show_tweet").text(response['text']);
  });

});
});

$(function(){
  var oneUp = function(){
    var num = parseInt($('#output').html());
    num += 1;
    $('#output').html(num);
  };
  var printNum = function(){
    var num = 0;
    $('#output').html(num);
  };
  printNum();

  $('button').click(function() {
  	oneUp();
  });
});
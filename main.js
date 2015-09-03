$(function(){
  var oneUp = function(){
    num++;
  };
  var printNum = function(){
    $('#output').html(num);
  };
  var num = 0;
  printNum();
  $("#my-button").click (function() { oneUp(); printNum();});
});

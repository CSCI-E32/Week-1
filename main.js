$(function(){
  var oneUp = function(){
    num++;
  };
  var printNum = function(){
    $('#output').html(num);
  };
  printNum();
});
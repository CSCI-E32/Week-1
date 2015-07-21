$(function(){
  var oneUp = function(){
    num++;
  };
  var printNum = function(){
    var num = 0;
    $('#output').html(num);
  };
  printNum();
});
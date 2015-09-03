$(function(){
  var num = 0;
  var printNum = function(){
    $('#output').html(num);
  };
  var oneUp = function(){
    num++;
    printNum;
  };
  printNum();
  $('#my-button').click(oneUp);
});
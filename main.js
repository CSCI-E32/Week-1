$(function(){
  var num = 0;
  var oneUp = function(){
    num++;
  };
  var printNum = function(){
    $('#output').html(num);
  };
  $('#my-button').click(function(){
    oneUp();
    printNum();
  });
  printNum();
});

$(function (){

  var num = 0;

  var printNum = function(){
    $('#output').html(num);
  };

  var oneUp = function(){
    num++;
    printNum();
  };

  $('#my-button').click(function(){
    oneUp();
  });

  printNum();

});

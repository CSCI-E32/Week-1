$(function(){
  var num = 0;

  var oneUp = function(){
    num++;
  };

  var printNum = function(){
    $('#output').html(num);
  };

  printNum();

  $('#my-button').click(function() {
    oneUp();
    printNum();
  });
});

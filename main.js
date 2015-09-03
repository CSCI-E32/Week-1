$(function(){

  var oneUp = function(){
    num++;
  };
  var printNum = function(){
    num = 0;
    $('#output').html(num);
  };

  $('#my-button').on('click', function() {
    oneUp();
    printNum();
  });

  printNum();
});

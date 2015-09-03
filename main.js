$(function(){
  var num = 0;

  $('#my-button').on('click', function(e) {
    e.preventDefault();
    oneUp();
    printNum();
  });
  var oneUp = function(){
    num++;
  };
  var printNum = function(){
    $('#output').html(num);
  };
  printNum();
});
$(function(){
  var num = 0;
  var oneUp = function(){
    num++;
  };
  var printNum = function(){
    //var num = 0;
    $('#output').html(num);
  };
  printNum();
  $('#my-button').click(function() {
  	 oneUp();
  	 printNum();
  });
});
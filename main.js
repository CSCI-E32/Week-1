$(function(){
  $("#my-button").on("click", function() {
	  oneUp();
  });
  var num = 0;
  var oneUp = function(){
      num++;
      printNum();
  };
  var printNum = function(){
    $('#output').html(num);
  };
  printNum();
});
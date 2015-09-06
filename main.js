$(function(){
  var num = 0;
  var oneUp = function(){
    $('#my-button').click(function() {
		num++;
		printNum();
	});
  };
  var printNum = function(){
    $('#output').html(num);
  };
  printNum();
  oneUp();
});
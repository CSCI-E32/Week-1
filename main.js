$(function(){
  
  var num = 0;
  $('#output').html(num);

  $('#my-button').click(function() {
		num++;
  	$('#output').html(num);	
  });
  
});
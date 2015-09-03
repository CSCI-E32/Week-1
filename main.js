$(document).ready(function(){
	
	var num = 0;
	$("#my-button").click(function(){
	  var oneUp = function(){
	    num++;
	  };
	  var printNum = function(){
	    $('#output').html(num);
	  };
	  printNum();
	  oneUp();
	});

});
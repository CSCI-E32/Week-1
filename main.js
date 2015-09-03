$(function(){
    var num = 0;
    
  var oneUp = function(){
      num++;
  };
  var printNum = function(){
    $('#output').html(num);
  };

    $('#my-button').on('click', function() {
	oneUp();
	printNum();
    });
    
  printNum();
});

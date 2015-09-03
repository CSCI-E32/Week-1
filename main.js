$(function(){

  // Set the number
  $('#output').html(0);

  // On click, increment
  $('#my-button').click(function(oneUp){

      var num = $('#output').text();
      num++;
      $('#output').html(num);

  });

});
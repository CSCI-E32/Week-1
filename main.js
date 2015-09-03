$(function(){
  $('#my-button').on('click', buttonUpHandler);

  function buttonUpHandler(e) {
    e.preventDefault();
    var num = parseInt($('#output').text());
    printNum(oneUp(num));
  }
  var oneUp = function(num){
    return ++num;
  };
  var printNum = function(num){
    $('#output').html(num);
  };
  printNum(0);
});
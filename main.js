$(function(){
  var num = 0;

  var oneUp = function(){
    num++;
    printNum();
  };

  document.getElementById('my-button').onclick = function() {oneUp()};

  var printNum = function(){
    $('#output').html(num);
  };
    printNum();
});

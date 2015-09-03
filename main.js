var num = 0;
var printNum = function() {
  $('#output').html(num);
};

var oneUp = function(){
  num++;
  printNum();
};



//printNum();

$(function(){
  /*
  var num = 0;
  var oneUp = function(){
    num++;
  };
  var printNum = function(){
    $('#output').html(num);
  };
  */
  printNum();
});

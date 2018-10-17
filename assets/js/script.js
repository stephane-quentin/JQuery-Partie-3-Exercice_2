$(function(){
  var count = 0;
  $('#more').click(function(){
    count++;
    $('input').val('Compteur ' + count);
  });
  $('#less').click(function(){
    count--;
    $('input').val('Compteur ' + count);
  });
});

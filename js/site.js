// jQuery 3.x-style ready event and locally scoped $
$(document).ready(function() {

  jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });

  $('#burger').click(function() {
    $('#menu').toggle();
  })

  $('#history').click(function() {
    $('.history').toggle('history');
    $('#constitution').toggle('constitution');
    $('#journal').toggle('journal');
  })

  $('#constitution').click(function() {
    $('.constitution').toggle('constitution');
    $('#history').toggle('history');
    $('#journal').toggle('journal');
  })

  $('#journal').click(function() {
    $('.journal').toggle('journal');
    $('#history').toggle('history');
    $('#constitution').toggle('constitution');
  })

})
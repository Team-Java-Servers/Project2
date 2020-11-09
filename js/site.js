// jQuery 3.x-style ready event and locally scoped $
$(document).ready(function() {

  jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });

  $('#burger').click(function() {
    $('#menu').toggle();
  })

})
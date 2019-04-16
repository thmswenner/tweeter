$(document).ready( function () {

  const maxLength = 140;

  $('#countval').keyup(function() {
    let length = $(this).val().length;
    let final = maxLength - length;
    if (final >= 0) {
      $('.counter').text(final);
    } else {
      $('.counter').text(final).css('color', 'red');
    }
  });

})
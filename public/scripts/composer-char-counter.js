$(() => {

  const maxLength = 140;

  $('#countval').on('input', function (event) {
    let length = $(this).val().length;
    let final = maxLength - length;
    let counter = $(this).parent().find('.counter')
    counter.text(final);
    if (final >= 0) {
      counter.removeClass('red');
    } else {
      counter.addClass('red');
      // counter.css('color', 'red');
    }
  });
})
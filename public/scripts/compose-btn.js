$(() => {

$('.nav-btn').on('click', (event) => {
  $('.new-tweet').slideToggle(400, function () {
    $('textarea').select()
  })
})

})
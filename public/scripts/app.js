
$(() => {

$('.error').hide()

$('textarea').on('focus', event => {
  $('.error').slideUp(400, () => {})
})

$('form').on('submit', event =>  {
  event.preventDefault();
  const textArea = $('textArea').val()
  if (textArea === '' || textArea.length > 140) {
    $('.error').slideDown(400, function() {})
    return;
  }
  const qstring = $('form').serialize();
  $.post('/tweets', qstring, function(){
    $('#countval').val('')
    $('#tweet-contain').empty();
    loadTweets()
  });
});


function loadTweets () {
  $.get('/tweets', function (event) {
    return renderTweets(event)
  })
}


function renderTweets(tweets) {
  let output = []
  tweets.forEach(function (obj) {
    output.push(createTweetElement(obj))
  })
  $('#tweet-contain').append(output)
}



//Creates HTML Structure

function createTweetElement(tweet) {
  const date = new Date(tweet.created_at)
  const dateString = `Date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  const output = $('<article>').append(
    $('<header>').addClass('post-head').append(
      $('<img>').addClass('profile-img').attr('src', tweet.user.avatars.small),
      $('<h2>').addClass('head-name').text(tweet.user.name),
      $('<p>').addClass('username').text(tweet.user.handle)
    ),

    $('<div>').addClass('post-body').append(
      $('<p>').text(tweet.content.text)
    ),

    $('<footer>').addClass('post-foot').append(
      $('<p>').text(dateString),
      $('<div>').addClass('icon-group').append(
        $('<img>').addClass('icon').attr('src', '/images/flag.png'),
        $('<img>').addClass('icon').attr('src', '/images/share.png'),
        $('<img>').addClass('icon').attr('src', '/images/like.png')
      )
    )
  )
  return output
}

loadTweets()


  $('.nav-btn').on('click', (event) => {
    $('.new-tweet').slideToggle(400, function () {
      $('textarea').select()
    })
  })

})
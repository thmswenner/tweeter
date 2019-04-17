
$(() => {

$('form').on('submit', (event) =>  {
  event.preventDefault();
  const qstring = $('form').serialize();
  $.post('/tweets', qstring)
});

function loadtweets () {
  const tweets$.getJSON('/tweets');
}

loadtweets()

function rendertweets(tweets) {
  let output = []
  tweets.forEach(function (obj) {
    output.push(createTweetElement(obj))
  })
  return output
}

//Creates HTML Structure

function createTweetElement(element) {
  const output = $('<article>').append(
    $('<header>').addClass('post-head').append(
      $('<img>').addClass('profile-img').attr('src', element.user.avatars.small),
      $('<h2>').addClass('head-name').text(element.user.name),
      $('<p>').addClass('username').text(element.user.handle)
    ),

    $('<div>').addClass('post-body').append(
      $('<p>').text(element.content.text)
    ),

    $('<footer>').addClass('post-foot').append(
      $('<p>').text('Date'),
      $('<div>').addClass('icon-group').append(
        $('<img>').addClass('icon').attr('src', '/images/flag.png'),
        $('<img>').addClass('icon').attr('src', '/images/share.png'),
        $('<img>').addClass('icon').attr('src', '/images/like.png')
      )
    )
  )
  return output
}

  // const $tweet = createTweetElement(tweetData);
  const $tweet = rendertweets(data);

  $('.container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
})
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Fake data taken from tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



$(document).ready( function () {



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
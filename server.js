function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function addPtags (sent) {
  return '<p>' + sent + '</p>'
}
function randJoke () {
  var joke = addPtags('Knock Knock') +
  addPtags('Who\'s there?')
  switch (getRandomInt(1, 4)) {
    case 1:
      joke += addPtags('Opportunity!') +
      addPtags('That is impossible. Opportunity doesn\'t come knocking twice!')
      break
    case 2:
      joke += addPtags('Beats.') +
      addPtags('Beats.') + addPtags('Beats me.')
      break
    default:
      joke += addPtags('The interrupting cow.') +
      addPtags('Interrupting cow wh-') + addPtags('Moooooo!')
      break
  }
  return joke
}
// Require Node's http module and assign it to a variable
var http = require('http')

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
        '<h1>Home</h1>' +
        '<img src="https://i.imgur.com/jKhQJVH.jpg" alt="Waving hi">'
    )
  } else if (request.url === '/random-joke') {
    response.end(
        '<h1>Random Joke</h1>' +
        randJoke()
    )
  } else if (request.url === '/cuteness') {
    response.end(
        '<h1>Cuteness</h1>' +
        '<img src="http://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals-2/cute-baby-animals-2-2.jpg" alt="Upside down cat">'
    )
  } else {
    response.end(
        '<h1>404 Page Not Found</h1>' +
        '<p> The requested URL ' + request.url + ' was not found on this server. That\'s all we know. </p>'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')

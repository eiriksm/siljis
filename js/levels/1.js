var $ = require('jquery')

function updateOne (state) {
  $('#start').hide()
  $('#cactus').show()
  // Move the cactus around randomly.
  if (state.step % 50 === 0) {
    var newY = Math.floor(Math.random() * (window.innerHeight * 0.8)) + 1
    var newX = Math.floor(Math.random() * (window.innerWidth * 0.8)) + 1
    $('#cactus').css({
      left: newX,
      top: newY
    })
  }
}

module.exports = updateOne

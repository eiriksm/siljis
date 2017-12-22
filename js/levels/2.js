const $ = require('jquery')

function updateTwo (state) {
  $('#cactus').hide()
  if (state.stop) {
    return
  }
  // The train should drive around.
  var $train = $('#train')
  $train.show()
  var direction = 0
  var mod = state.step % 200
  if (mod < 100) {
    direction = 1
  }
  var loco = '<span class="loco">🚂</span>'
  var text = `🚃${loco}`
  if (direction) {
    text = `${loco}🚃`
  }
  $train.html(text)
  var css = {
    right: 'auto'
  }
  var prop = 'left'
  if (direction) {
    prop = 'right'
    css['left'] = 'auto'
    $train.find('.loco').css({
      transform: 'scaleX(1)'
    })
  } else {
    $train.find('.loco').css({
      transform: 'scaleX(-1)'
    })
  }
  css[prop] = (mod % 100) * 0.8 + '%'
  $train.css(css)
}

module.exports = updateTwo

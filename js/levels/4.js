const $ = require('jquery')
const grid = [
  [
    '🦄', '😎', '🧛‍♀️', '🎩', '🍹'
  ],
  [
    '🎲', '❤️', '👻', '🙀', '🧕'
  ],
  [
    '👯‍♀️', '🦑', '🦕', '🍽', '🔥'
  ]
]

function updateFour (state) {
  $('#grid').show()
  $('#pass').hide()
}

module.exports = updateFour

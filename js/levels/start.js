var $ = require('jquery')

function updateStart (state) {
  if (!(new Date().getTime() > 1514080800000) && !state.override) {
    $('.warning').show()
    $('#start').hide()
    return
  }
  $('.warning').hide()
  $('#start').show()
}

module.exports = updateStart

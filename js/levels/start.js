var $ = require('jquery')

function updateStart (state) {
  if (!(new Date().getTime() > 1545616800000) && !state.override) {
    return
  }
  $('.warning').hide()
  $('#start').show()
}

module.exports = updateStart

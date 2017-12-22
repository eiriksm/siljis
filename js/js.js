'use strict'
var $ = require('jquery')
var _ = require('underscore')
require('../css/css.css')
function createState () {
  return {
    level: -1,
    step: 0,
    stop: false,
    tries: 0,
    choos: 0,
    override: !new RegExp(/silje/).test(window.location.href) || new RegExp(/666/).test(window.location.href)
  }
}
window.cheat = function () {
  state.level++
}
var state = createState()

var lastState = createState()

const updateOne = require('./levels/1')
const updateStart = require('./levels/start')
const updateThree = require('./levels/3')
const updateTwo = require('./levels/2')
const updateFour = require('./levels/4')

function updateHeading () {
  var text = ''
  switch (state.level) {
    case 0:
      text = 'Gi en kaktus kos!'
      break

    case 1:
      text = 'Få toget til å ta en "choo choo" pause 3 ganger'
      break

    case 2:
      text = 'Gjett det hemmelige passordet'
      break

    case 3:
      text = 'Finn den riktige knappen'
      break
  }
  $('#instructions').text(text)
}

function update () {
  state.step++
  // Check if we should update level description.
  if (state.level !== lastState.level) {
    updateHeading()
  }
  switch (state.level) {
    case -1:
      updateStart(state)
      break
    case 0:
      updateOne(state)
      break

    case 1:
      updateTwo(state)
      break

    case 2:
      updateThree()
      break

    case 3:
      updateFour(state)
      break
  }
  lastState = _.clone(state)
  window.requestAnimationFrame(update)
}

$(document).ready(function () {
  window.requestAnimationFrame(update)
  $('#cactus').click(function () {
    $(this).hide()
    state.level++
  })
  $('#start').click(function () {
    $(this).hide()
    state.level++
  })
  $('#train').click(function () {
    if (state.stop) {
      return
    }
    state.stop = true
    window.choo()
  })
  $('#check').click(function () {
    // The third try will be correct.
    state.tries++
    if (state.tries === 3) {
      state.level++
      $('#pass').hide()
    }
  })
  $('.cell').click(function () {
    var text = $(this).text().trim()
    if (text === '🦕') {
      $('#solution').show()
    }
    else {
      $('#feil').animate({
        opacity: 1
      }, 1300)
      .animate({
        opacity: 0
      }, 1300)
    }
  })
  window.choo = function () {
    var $choo = $('#choo')
    $choo.show()
    .css({
      fontSize: 'inherit',
      opacity: 1
    })
    $choo.animate({
      fontSize: '45px'
    }, {
      duration: 1000
    })
    .hide(300)
    .show(10)
    .animate({
      opacity: 0
    }, {
      duration: 2000,
      complete: function () {
        $choo.hide()
        state.choos++
        state.stop = false
        if (state.choos === 3) {
          state.level++
        }
      }
    })
  }
})
module.exports = function () {}

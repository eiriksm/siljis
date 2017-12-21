  'use strict';
var $ = require('jquery')
var _ = require('underscore')
function createState() {
  return {
    level: 0,
    step: 0
  }
}
var state = createState()

var lastState = createState()

function updateOne() {
  // Move the cactus around randomly.
  if (state.step % 50 === 0) {
    var newY = Math.floor(Math.random() * (window.innerHeight * .8)) + 1;
    var newX = Math.floor(Math.random() * (window.innerWidth * .8)) + 1;
    $('#cactus').css({
      left: newX,
      top: newY
    });
  }
}

function updateTwo() {
  // The train should drive around.
  var $train = $('#train')
  $train.show()
  var direction = 0
  var mod = state.step % 200
  if (mod < 100) {
    direction = 1;
  }
  var text = '🚃🚂'
  if (direction) {
    text = '🚂🚃'
  }
  $train.text(text)
  var css = {
    right: 'auto'
  }
  var prop = 'left'
  if (direction) {
    prop = 'right'
    css['left'] = 'auto';
  }
  css[prop] = (mod % 100) * 0.9 + '%'
  $train.css(css)
}

function updateHeading() {
  var text = '';
  switch (state.level) {
    case 1:
      text = 'Få toget til å ta en "choo choo" pause 3 ganger'
      break;

  }
  $('#instructions').text(text)
}

function update() {
  state.step++;
  // Check if we should update level description.
  if (state.level != lastState.level) {
    updateHeading();
  }
  switch (state.level) {
    case 0:
      updateOne();
      break

    case 1:
      updateTwo()
      break;
  }
  lastState = _.clone(state)
  window.requestAnimationFrame(update)
}

$(document).ready(function() {
  window.requestAnimationFrame(update)
  $('#cactus').click(function() {
    $(this).hide()
    state.level++
  })
})
module.exports = function() {}

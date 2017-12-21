(function($) {
  var state = {
    level: 0,
    step: 0
  }

  var lastState = state;

  function updateOne() {
    // Move the cactus around randomly.
    if (state.step % 30 === 0) {
      var newY = Math.floor(Math.random() * (window.innerHeight * .8)) + 1;
      var newX = Math.floor(Math.random() * (window.innerWidth * .8)) + 1;
      $('#cactus').css({
        left: newX,
        top: newY
      });
    }
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
        break;
    }
    lastState = state;
    window.requestAnimationFrame(update)
  }

  $(document).ready(function() {
    window.requestAnimationFrame(update)
  })
})(jQuery);

$(function(){

  // fade in menu shadow on scroll
  var $doc = $(document)
  var $menuTopShadow = $('#menu-top-shadow')
  var $hamburgerButton = $('#hamburger-button')
  var $items = $('#items')
  var $titleRow = $('#title-row')
  var $titlePic = $('#title-pic')
  var $titlePicPlan = $('#title-pic-plan')
  var $titlePicArch = $('#title-pic-arch')
  var $titlePicFurniture = $('#title-pic-furniture')

  /*
   * Desktop Menu
   */

  var current = 1, target = 0

  $(document).scroll(function() {
    var scrollTop = $doc.scrollTop()

    // title pic animation
    var titleRowHeight = $titleRow.height()
    // at which scroll position in px to start and stop the animation:
    var titleRowHeight, animStart, animEnd
    if (titleRowHeight < 450) {
      // desktop
      animStart = 40
      animEnd = 150
    } else {
      // mobile
      animStart = 70
      animEnd = 500
    }
    // calculate target positon
    target = Math.min(1, Math.max(0, scrollTop-animStart) / animEnd)

    // shadow
    if ($menuTopShadow.is(':visible')) {
      if (scrollTop > 50) {
        $menuTopShadow.css({ opacity: 1 })
      } else {
        $menuTopShadow.css({ opacity: 0 })
      }
    }

  })

  onAnimationFrame(function(){
    // lerp towards scroll target
    current = Math.round((current + (target-current)*0.035)*10000)/10000
    // update pic css
    $titlePic.css({
      opacity: 1-current
    })
    $titlePicFurniture.css({
      '-webkit-transform': 'translateY('+(-8 + current * -60)+'%)',
      transform: 'translateY('+(-8 + current * -60)+'%)'
    })
    $titlePicArch.css({
      '-webkit-transform': 'translateY('+(21 + current * -8)+'%)',
      transform: 'translateY('+(21 + current * -8)+'%)'
    })
    $titlePicPlan.css({
      '-webkit-transform': 'translateY('+(54 + current * 30)+'%)',
      transform: 'translateY('+(54 + current * 30)+'%)'
    })
  })


  /*
   * Mobile Menu
   */

  var mobileMenuIsVisible = false
  function showMenu () {
    mobileMenuIsVisible = true
    $items.css({
      '-webkit-transform': 'translateX(0px)',
      transform: 'translateX(0px)'
    })
  }
  function hideMenu () {
    mobileMenuIsVisible = false
    $items.css({
      '-webkit-transform': 'translateX(-220px)',
      transform: 'translateX(-220px)'
    })
  }
  $($hamburgerButton).on('click touch', function() {
    if (mobileMenuIsVisible) {
      hideMenu()
    } else {
      showMenu()
    }
  })
  $(items).on('click touch', function(){
    if ($hamburgerButton.is(':visible')) {
      hideMenu()
    }
  })

  /*
   * Make certain classes clickable
   */

  $('.open-dev-dashboard').each(function(i, el){
    $(el).on('click', io3d.utils.ui.devDashboard)
  })
  $('.open-publishable-api-keys-menu,.open-publishable-api-key-menu,.open-publishable-keys-menu,.open-publishable-key-menu').each(function(i, el){
    $(el).on('click', io3d.utils.ui.publishableApiKeys)
  })
  $('.open-secret-api-keys-menu,.open-secret-api-key-menu,.open-secret-keys-menu,.open-secret-key-menu').each(function(i, el){
    $(el).on('click', io3d.utils.ui.secretApiKey)
  })


})


// animation frame

requestAnimationFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function ( callback, element) {
    return window.setTimeout(callback, 1000 / 60);
  }

cancelRequestAnimationFrame =  window.webkitCancelRequestAnimationFrame ||
  window.mozCancelRequestAnimationFrame ||
  window.oCancelRequestAnimationFrame ||
  window.msCancelRequestAnimationFrame ||
  clearTimeout

var animationFrameCallbacks = []
function onAnimationFrame (callback) {
  animationFrameCallbacks.push(callback)
}

;(function loopFrameRequest () {
  for (var i=0; i<animationFrameCallbacks.length; i++) animationFrameCallbacks[i]()
  requestAnimationFrame(loopFrameRequest)
})()
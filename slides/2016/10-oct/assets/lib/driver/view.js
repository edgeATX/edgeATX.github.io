// Basic Driver
var SLIDES = new NGNX.Driver({
  namespace: 'slides.',
  references: {
    navigator: 'html > body > chassis-cycle:first-of-type',
    keyboard: 'html',
    agenda: '.agenda_slide'
  }
})

// General Events
SLIDES.pool({
  next: function () {
    SLIDES.ref.navigator.next()
  },

  previous: function () {
    SLIDES.ref.navigator.previous()
  },

  change: function () {
    window.location.hash = SLIDES.ref.navigator.selectedIndex + 1
  }
})

// Chassis Cycle Bindings
SLIDES.ref.navigator.on('change', function () {
  NGN.BUS.queue('slides.change', 300)
})

// Keyboard Event Bindings
SLIDES.ref.keyboard.on('keydown', function (e) {
  if ([39, 40, 32, 13].indexOf(e.keyCode) >= 0) {
    SLIDES.emit('next')
    e.preventDefault()
  }
  if ([37, 38, 8].indexOf(e.keyCode) >= 0) {
    SLIDES.emit('previous')
    e.preventDefault()
  }
})

// Setup a couple of niceties
console.log(SLIDES.ref.agenda)
SLIDES.ref.agenda.insertAdjacentHTML('afterbegin', '<h1>' + document.title + '</h1>')
// console.log(document.title)

// If a slide is specified in the URL, jump to it.
if (window.location.hash !== '') {
  let slide = parseInt(window.location.hash.replace(/#/gi, ''), 10)
  console.log(slide)
  SLIDES.ref.navigator.show(slide)
}

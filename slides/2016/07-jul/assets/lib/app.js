NGNX.Loader({
  async: [
    './assets/lib/driver/view.js'
  ]
}, 'ready')

NGN.BUS.on('ready', function () {
  NGN.DOM.svg.update()
  document.body.classList.remove('hidden')
})

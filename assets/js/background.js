/*******************
 * SKY BACKGROUND
 *******************/
var background = {
  load: function () {
    this.img = $("#background-image img")[0]
    if (this.img.complete) {
      console.log("Background image loaded before script. Fade in background.")
      $("#background-image").addClass("shown") // show background image container
      this.initialize()
    } else {
      var that = this
      this.img.addEventListener("load", function () {
        console.log("Background image loaded after script. Fade in background.")
        $("#background-image").addClass("shown") // show background image container
        that.initialize()
      })
    }
  },
  initialize: function () {
    this.measure()
    this.start(10)
  },
  measure: function () {
    this.imgWidth = this.img.clientWidth
    this.windowWidth = $(window).width()
  },
  start: function (fps) {
    this.t = 0
    this.fpsInterval = 1000 / fps
    this.now
    this.then = Date.now()
    this.elapsed
    this.paused = $("main").attr("data-template") == "video" // set background to paused if the page is a Video page
    this.repositionBackground() // initial position
    this.animate()
  },
  animate: function () {
    requestAnimationFrame(this.animate.bind(this)) // request another frame
    if (!this.paused) {
      this.now = Date.now() // calc elapsed time since last loop
      this.elapsed = this.now - this.then
      if (this.elapsed > this.fpsInterval) {
        // if enough time has elapsed, draw the next frame
        this.then = this.now - (this.elapsed % this.fpsInterval) // Get ready for next frame by setting then=now, but also adjust for your specified fpsInterval not being a multiple of RAF's interval (16.7ms)

        // sky background animation
        this.repositionBackground()
        this.t += 0.0002 // increment animation loop parameter
        if (this.t > 1) this.t -= 1
      }
    }
  },
  repositionBackground: function () {
    // sky background positioning
    var p = Math.abs((this.t - 0.5) * 2) // turn t into a periodic zigzag so the animation loops back and forth
    var offset = p * (this.imgWidth - this.windowWidth) // offset is some portion of the extra width that the background image has over the window
    // this.img.style.transform = 'translateZ(0) translateY(-50%) translateX(-'+offset+'px)';
    this.img.style.transform = "translate3D(-" + offset + "px, -50%, 0)" // apply transform
  },
}
background.load()

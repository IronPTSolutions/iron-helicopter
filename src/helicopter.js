class Helicopter {
  constructor(ctx) {
    this.ctx = ctx
    this.tick = 0

    this.x = 100
    this.y = 0

    this.w = 100
    this.h = 40

    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 0
    this.ay = 0
    this.ax = 0
    this.g = 0.1

    this.img = new Image()
    this.img.src = "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png"
    this.img.frames = 4
    this.img.frameIndex = 0

    this.weapon = new Weapon(this)

    //this._setListeners()
  }

  draw() {
    // TODO: draw helicopter image
    //(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    this.ctx.drawImage(
      this.img,
      0,
      this.img.frameIndex * this.img.height / this.img.frames,
      this.img.width,
      this.img.height / this.img.frames,
      this.x,
      this.y,
      this.w,
      this.h
    )

    

    this.weapon.draw()
  }

  animate() {
    if (this.tick++ > 0.5) {
    this.tick = 0
    this.img.frameIndex++

    if (this.img.frameIndex > this.img.frames - 1) {
      this.img.frameIndex = 0
    }
   }

}

  isFloor() {
    // TODO: check if floor
    if (this.y >= this.ctx.canvas.height) {
      return true
   }
  }

  move() {
    this.vx += this.ax
    this.vy += this.ay
    this.x += this.vx
    this.y += this.vy
    this.vy += this.g
    /*if ( this.y >= this.ctx.canvas.height - this.h) {
      this.vy = 0
    }*/
  }

  onKeyEvent(event) {
    if (event.type === 'keydown') {
      this.animate();
      switch (event.keyCode) {
        case RIGHT:
          this.vx = 5
          break;
        case LEFT:
          this.vx = -5
          break;
        case UP:
          this.vy = -5
          break;
        case SPACE:
          this.weapon.shoot()
          break;  
      }
      
    }else if (event.type === 'keyup'){
      switch (event.keyCode) {
        case RIGHT:
          this.vx = 0
          break;
        case LEFT:
          this.vx = 0
          break;
        case UP:
          this.vy = 0
          break;
      }
    }
  }
}

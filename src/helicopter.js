class Helicopter {
  constructor(ctx) {
    this.ctx = ctx
    this.tick = 0

    this.x = 100
    this.y = 0
    

    this.w = 100
    this.h = 40
    this.y0 = this.ctx.canvas.height - this.h

    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 1
    this.ay = 0
    this.ax = 0
    this.g = 0.1

    this.img = new Image()
    this.img.src = "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png"
    this.img.frames = 4
    this.img.frameIndex = 0
    this.tick = 0

    this.weapon = new Weapon(this)

    this.setListeners() 
  }

  setListeners() {
    document.addEventListener('keydown', e => {
      this.onKeyEvent(e)
    })
    
    document.addEventListener('keyup', e => {
      this.onKeyEvent(e)
    })
  }

  draw() {
    // TODO: draw helicopter image
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

    this.weapon.draw(
    )

   this.animate()
 }

  animate() {
    this.tick++ 
    if (this.tick > 16) {
      this.tick = 0
      this.img.frameIndex++

      if (this.img.frameIndex > this.img.frames - 1) {
        this.img.frameIndex = 0;
      }
    }
  }

  isFloor() {
    // TODO: check if floor
      return this.y >= this.y0
  }

  move() {
    // TODO: move
    this.vx += this.ax
    this.vy += this.ay
    this.x += this.vx
    this.y += this.vy

    if (this.isFloor()) {
      this.vy = 0
    }
  }

  onKeyEvent(event) {
      
    console.log(event);
      // switch(event) {
      //   case RIGHT:
      //     this.vx = 5
      //     break;
      //   case LEFT:
      //     this.vx = -5
      //     break;
      //   case UP:
      //     this.vy = -5;
      //     this.ay = 5;
      //     break;
      //   case SPACE:
      //     this.shoot()
      //     break;
      // }
   
  }
}

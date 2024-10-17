class Helicopter {
  constructor(ctx) {
    this.ctx = ctx;
    this.tick = 0;

    this.x = 100;
    this.y = 0;

    this.w = 100;
    this.h = 40;

    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0;
    this.ax = 0;
    this.g = 0.05;

    this.img = new Image();
    this.img.src =
      "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;

    this.isFlying = false;

    this.weapon = new Weapon(this);
  }

  draw() {
    //draw helicopter image
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frameIndex / this.img.frames) * this.img.height,
      this.img.width,
      this.img.height / this.img.frames,
      this.x,
      this.y,
      this.w,
      this.h
    );

    this.tick++;

    //update animation
    if(this.tick > 10) {
      this.tick = 0;

      if(this.isFlying) {
        this.img.frameIndex++;

        if(this.img.frameIndex ==  this.img.frames) {
          this.img.frameIndex = 0;
        }
      }     
    }

    this.weapon.draw();
  }

  isFloor() {
    // TODO: check if floor
  }

  move() {
    if(this.isFlying) {
      this.ay = -0.1;
    } else {
      this.ay = 0;
    }

    this.vy += this.g + this.ay;
    this.vx += this.ax;

    this.x += this.vx;
    this.y += this.vy;
    
    
  }

  onKeyEvent(event) {
    if(event.type == "keydown") {
      switch (event.keyCode){
        case UP:
          this.isFlying = true;
          break;
        case RIGHT:
          this.ax = 0.1;
          break;
        case LEFT:
          this.ax = -0.1;
          break;
      }
    }

    if(event.type == "keyup") {
      switch (event.keyCode){
        case UP:
          this.isFlying = false;
          break;
        case RIGHT:
        case LEFT:
          this.ax = 0;
          break;
      }
    }
  }
}

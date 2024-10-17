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
    this.g = 0.1;

    this.img = new Image();
    this.img.src =
      "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;

    this.weapon = new Weapon(this);
  }

  draw() {
    // TODO: draw helicopter image
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frameIndex / this.img.frames) * this.img.height,  // Lo cambiamos con respecto a arriba, porque nos fijamos en la img en vertical
      this.img.width, // Queremos toda la imagen en x, por eso tomamos todo
      this.img.height / this.img.frames,  // Nos fijamos en la img en vertical, como hay 4 helicopteros lo dividimos entre 4
      this.x,
      this.y,
      this.w,
      this.h);
      this.tick++;
      if (this.tick > 10) {
        this.tick = 0;
        this.img.frameIndex++;
        if (this.img.frameIndex > 3) {
          this.img.frameIndex = 0;
        }
    }

    this.weapon.draw();
  }

  isFloor() {
    // TODO: check if floor
  }

  move() {
    // TODO: move
    this.vy += this.g;  // En vy siempre afecta la gravedad
    this.vx += this.ax;

    this.x += this.vx;
    this.y += this.vy;

    if (this.y + this.h >= this.ctx.canvas.height) {
      this.vy = 0;
      this.y = this.ctx.canvas.height - this.h;
    }
  }

  onKeyEvent(event) {
    // TODO
  }

}


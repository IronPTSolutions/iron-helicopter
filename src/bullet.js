class Bullet {
  constructor(ctx, x, y) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.vx = 15
    this.r = 2
  }

  draw() {
    this.ctx.beginPath();
    // TODO: draw circle
    this.ctx.arc(this.x, this.y, this.r, 0, 2* Math.PI);
    this.ctx.fill();
    this.ctx.closePath()
  }

  move() {
    // TODO: move circle
    this.vx += this.ax
    this.vy += this.ay
    this.x += this.vx
    this.y += this.vy
    }
  }

  isVisible() {
    // TODO: is inside canvas?
    return (
      this.x < this.ctx.canvas.width * 2 &&
      this.x > 0 - this.ctx.canvas.width
    )
  }
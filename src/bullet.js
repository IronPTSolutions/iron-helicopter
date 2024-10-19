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
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); // Hacemos que se dibuje
    this.ctx.fill();  // Lo rellenamos
    this.ctx.closePath()
  }

  move() {
     // TODO: move circle
    this.x += this.vx;
  } 

  isVisible() {
    // TODO : is inside canvas?
    return 0 < this.x < this.ctx.canvas.width && 0 < this.y < this.ctx.canvas.height;  
  }
}
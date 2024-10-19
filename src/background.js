class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.x = 0
    this.y = 0

    this.vx = -2

    this.img = new Image()
    this.img.src = "https://image.freepik.com/free-vector/sky-day-game-background_7814-306.jpg"
  }

  draw() {
    // TODO: draw image
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  
    // TODO: draw image again on the right
    this.ctx.drawImage(this.img, 
      this.x+this.ctx.canvas.width, 
      this.y, 
      this.w, 
      this.h);
  }

  move() {
    // TODO: move background
    this.x += this.vx; 
    // TODO: restart position if out of canvas
    if (this.x + this.w <= 0) {
      this.x = 0;
    }
  }
}
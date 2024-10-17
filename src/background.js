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
    // Draw Img
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

    //Draw Img to the right
    this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
  }

  move() {
    //move background
    this.x += this.vx;

    //restart position if out of canvas
    if(this.x + this.w <= 0) {
      this.x = 0;
    }
  }
}
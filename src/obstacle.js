class Obstacle {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width;
    this.dist = Math.random() * 100 + 200;
    this.y = Math.random() > 0.5 ? 0 - this.dist : this.dist;
    this.w = Math.random() * 40 + 50;
    this.h = this.ctx.canvas.height;
    this.vx = -3;
  }

  draw() {
    this.ctx.fillRect(
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move() {
    this.x += this.vx;
  }

  isVisible() {
    return this.x + this.w > 0; // Para que diga solo false cuando ya se ha ido por la izq, de lo contrario se carga los recien creados
  }
}

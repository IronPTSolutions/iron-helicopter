class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0;

    this.bg = new Background(ctx);
    this.helicopter = new Helicopter(ctx);
    this.obstacles = [];
  }

  start() {
    // TODO: loop. clear, draw, move, addObstacle
    //this.draw();
    this.intervalId = setInterval(() => {
      this.draw();
      this.move();
    }, 1000 / 60);
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    // TODO: draw everything
    this.bg.draw();
    //this.obstacles.draw();
    this.helicopter.draw();
  }

  move() {
    // TODO: move everything
    this.bg.move();
    this.helicopter.move();
  }

  onKeyEvent(event) {
    // TODO
    document.addEventListener("keyup", (e) => {
      this.helicopter.onKeyEvent(e.keyCode);
    });
    document.addEventListener("keydown", (e) => {
      this.helicopter.onKeyEvent(e.keyCode);
    });
  }
}

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
    this.intervalId = setInterval(() => {
      this.clear();

      this.draw();

      this.move();

      if (this.helicopter.isFloor()){
        clearInterval(this.intervalId);
        this.ctx.font = "50px Comic Sans MS";
        this.ctx.textAlign = "center";
        this.ctx.fillText("GAME OVER", this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
      }

      if (this.tick === 100) {
        this.tick = 0;
        this.addObstacle();
      }

      this.tick++;

    }, 1000 / 60);
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks
      const newObstacle = new Obstacle(this.ctx);
      this.obstacles.push(newObstacle);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.bg.draw();
    this.helicopter.draw();
    this.obstacles.forEach((obstacle) => obstacle.draw());
  }

  move() {
    this.bg.move();
    this.helicopter.move();
    this.obstacles.forEach((obstacle) => obstacle.move());
  }

  onKeyEvent(event) {
      this.helicopter.onKeyEvent(event.keyCode);
  }
}

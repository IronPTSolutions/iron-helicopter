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
    this.intervalId = setInterval(() => {
      this.clear();

      this.move();

      this.draw();    

      this.tick++;

      if(this.tick >= 100) {
        this.tick = 0;

        this.addObstacle();
      } 
    },
    1000 / 60);
  }

  addObstacle() {
    const obstacle  = new Obstacle(this.ctx);

    this.obstacles.push(obstacle);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.bg.draw();
    this.helicopter.draw();

    this.obstacles.forEach(o => o.draw());
  }

  move() {
    this.bg.move();

    this.helicopter.move();

    this.obstacles.forEach(o => o.move());

    this.obstacles = this.obstacles.filter(o => o.isVisible());
    
  }

  onKeyEvent(event) {
    this.helicopter.onKeyEvent(event);
  }
}

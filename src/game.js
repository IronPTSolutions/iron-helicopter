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
      this.tick++;

      this.addObstacle();

      this.checkCollisions();
      
      this.clearObstacles();

    }, 1000 / 60);
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks
    if (this.tick >= 100) {  
      this.tick = 0;
      const obstacle = new Obstacle(this.ctx);
      this.obstacles.push(obstacle);  
    }
  }

  clearObstacles() {
    this.obstacles = this.obstacles.filter((obstacle) => obstacle.isVisible());
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    // TODO: draw everything
    this.bg.draw();
    this.helicopter.draw();
    this.obstacles.forEach((obstacle) => obstacle.draw());
  }

  move() {
    // TODO: move everything
    this.bg.move();
    this.helicopter.move();
    this.obstacles.forEach((obstacle) => obstacle.move());
  }

  gameOver() {
    clearInterval(this.intervalId);
    console.log("Estoy aqui");

    this.clear(); // Elimino todo de la pantalla

    this.bg.draw(); // Como el clear borra todo hay que volver a llamar al bg

    this.ctx.font = "50px Verdana";
    this.ctx.textAlign = "center";

    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );

    this.obstacles = [];
    this.helicopter = null;
  }

  checkCollisions() {
    if (this.helicopter.checkCollision(this.obstacles) || this.helicopter.isFloor()) {
      this.gameOver();
    }
  }

  onKeyEvent(event) {
    // TODO
    this.helicopter.onKeyEvent(event);
  }
}
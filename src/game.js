class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0

    this.bg = new Background(ctx)
    this.helicopter = new Helicopter(ctx)
    this.obstacles = []
  }

  start() {
    // TODO: loop. clear, draw, move, addObstacle, checkCollisions, clearObstacles
    this.interval = setInterval(() => {
      this.clear()
      this.draw()
      this.checkCollisions()
      this.move()
      this.addObstacle()
      this.clearObstacles()  
    }, 1000 / 60)
  }

  clearObstacles() {
    // TODO: filter only visible obstacles (call o.isVisible())
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  draw() {
    // TODO: draw everything
    this.bg.draw()
    this.helicopter.draw()
  }

  move() {
    // TODO: move everything
    this.bg.move()
    this.helicopter.move()
  }

  checkCollisions() {
    // TODO: check helicopter on floor?
    // TODO: iterate obstacles. check colX and colY
  }

  onKeyEvent(event) {
      document.onkeydown = (event) => {
        this.helicopter.onKeyDown(event.keyCode)
      }
  
      document.onkeyup = (event) => {
        this.helicopter.onKeyUp(event.keyCode)
      }
    }
  

  gameOver() {
    clearInterval(this.intervalId)

    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }
}
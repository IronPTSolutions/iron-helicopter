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
    //this.initListeners()
   

    this.interval = setInterval(() =>{
      this.clear()
      this.draw()
      this.move()
      this.addObstacle()
      this.checkCollisions()
    }, 1000 / 60)
  }

  //initListeners() {


  clearObstacles() {
    // TODO: filter only visible obstacles (call o.isVisible())
    this.obstacles = this.obstacles.filter(o => o.isVisible())
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks
   this.tick--

   if (this.tick <=0) {
    this.tick = 100 + Math.random()
    this.obstacles.push(new Obstacle(this.ctx))
   }
    
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  draw() {
    // TODO: draw everything
    this.bg.draw();
    this.helicopter.draw();
    this.obstacles.forEach(o => o.draw())
  }

  move() {
    // TODO: move everything
    this.bg.move();
    this.helicopter.move();
    this.obstacles.forEach(o => o.move())
  }

  checkCollisions() {
   // TODO: iterate obstacles. check colX and colY &&  TODO: check helicopter on floor?
    const hl = this.helicopter;
    const o = this.obstacles;
    this.obstacles.forEach(o => {
    const colX = (hl.x + hl.w) >= o.x && (o.x + o.w) >= hl.x;
    const colY = (o.y + o.h) >= hl.y && o.y <= (hl.y + hl.h); 
    if (colX && colY) {
      this.gameOver()
     }
    })
    if (this.helicopter.isFloor()){
      this.gameOver()
    }
  }

  onKeyEvent(event) {
    // TODO
    this.helicopter.onKeyEvent(event)
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
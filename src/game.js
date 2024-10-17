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
    this.interval = setInterval(() => { // repite la función interna 60 veces por segundo (1000 ms / 60 = 60 FPS)
      this.clear();   // Limpia el lienzo.
      this.draw();    // Dibuja el fondo, los enemigos y el jugador
      this.move();    // Mueve los objetos del juego (fondo, enemigos y jugador)
      this.addObstacle();
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
    this.helicopter.draw();
  }

  move() {
    // TODO: move everything
    this.bg.move();
    this.helicopter.move();
  }

  onKeyEvent(event) {
    // TODO
    switch (event) {
      case UP: {
          if (this.vy === 0) {
              this.vy = -30;
              this.vx = 0;
          }
          break;
      }
      case RIGHT: {
          if (this.vx === 0) {
              this.vx = 30;
              this.vy = 0;
          }
          break;
      }
      case LEFT: {
          if (this.vx === 0) {
              this.vx = -30;
              this.vy = 0;
          }
          break;
      }
    }
  }
}
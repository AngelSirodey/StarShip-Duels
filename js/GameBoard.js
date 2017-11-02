
function StarShipCanvas() {
    this.ship = new Ship(25, 400, "../img/leftShip.png", 100, 80);
    this.ship2 = new Ship(1500, 400, "../img/rightShip.png", 100, 80);
    this.shot = new Shot(this.ship.x + 30, this.ship.y + 18, "../img/red222-shot.png", 60, 50);
    this.shot2 = new Shot(this.ship2.x + 2, this.ship2.y + 5, "../img/green222-shot.png", 90, 90);
    this.asteroidPool = [new Ball(800, 200, 8, 8, "../img/asteroid.png", 80, 80), 
                        new Ball(1400, 600, 6, 6, "../img/asteroid.png", 150, 150),
                        new Ball(50, 100, 4, 4, "../img/asteroid.png", 200, 200),
                        new Ball(100, 700, 7, 7, "../img/asteroid.png", 100, 100)];
}



StarShipCanvas.prototype.UpdateCanvas = function () {
    ctx.clearRect(0, 0, 1600, 900);
    this.ship.drawShip(this);

}






function StarShipCanvas() {
    this.ship = new Ship(25, 400, "../img/leftShip.png", 100, 80);
    this.ship2 = new Ship(1500, 300, "../img/rightShip.png", 100, 80);
    this.shot = new Shot(this.ship.x + 30, this.ship.y + 18, "../img/red222-shot.png", 60, 50);
    this.shot2 = new Shot(this.ship2.x + 2, this.ship2.y + 5, "../img/green222-shot.png", 90, 90);
    // this.asteroid = new Asteroid(700, 500, "../img/asteroid.png", 80, 80);
}



StarShipCanvas.prototype.UpdateCanvas = function () {
    ctx.clearRect(0, 0, 1600, 900);
    this.ship.drawShip(this);

}





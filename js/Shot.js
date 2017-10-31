function Shot(ship) {
    this.x = ship.x + 20;
    this.y = ship.y + 17;
    this.speed = 20;
    this.image = new Image();
    this.image.src = "../img/red-shot.png";
}

Shot.prototype.update = function () {
        this.x += 20;
}

Shot.prototype.drawBullet = function (canvas) {   
    canvas.ctx.drawImage(this.image, this.x, this.y, 20, 15);
}



function Shoot() {
    this.x = 20;
    this.y = 20;
    this.speed = 10;
    
    
}

Shoot.prototype.movebullet = function () {
    if (this.x < 0) this.x += 20;
}


Shoot.prototype.drawBullet = function (canvas) {
    var img = new Image();
    img.src = "../img/ball-shoot.png";
    img.onload = function () {
      canvas.ctx.drawImage(img, this.x, this.y, 20, 15);
    }.bind(this);
}


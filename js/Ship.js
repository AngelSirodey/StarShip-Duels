function Ship() {
  this.x = 25;
  this.y = 400;
  this.image = new Image();
  this.image.src = "../img/leftShip.png";
}

Ship.prototype.upMove = function () {
  if (this.y > 0) this.y -= 20;
}

Ship.prototype.downMove = function () {
  if (this.y < 840) this.y += 20
}

Ship.prototype.leftMove = function () {
  if (this.x > 0) this.x -= 20
}

Ship.prototype.rightMove = function () {
  if (this.x < 600) this.x += 20
}

Ship.prototype.drawShip = function (canvas) {
    canvas.ctx.drawImage(this.image, this.x, this.y, 50, 50);
}

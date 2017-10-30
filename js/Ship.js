function Ship() {
  this.x = 25;
  this.y = 400;
  

}

Ship.prototype.upMove = function () {
   if(this.y > 0) this.y -= 20;
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
  var img = new Image();
  img.src = "../img/leftShip.jpeg";
  img.onload = function () {
    canvas.ctx.drawImage(img, this.x, this.y, 50, 50);
  }.bind(this);

}

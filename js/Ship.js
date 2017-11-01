function Ship(x, y, img, w, h) {
  this.x = x;
  this.y = y;
  this.image = new Image();
  this.image.src = img;
  this.width = w;
  this.height = h;
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

Ship.prototype.drawShip = function () {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
}

// Ship.prototype.fire = function () {
//   shipBullets.push(new Shot(ship.x + 20, ship.y + 17, "../img/red222-shot.png", 30, 20));
// }
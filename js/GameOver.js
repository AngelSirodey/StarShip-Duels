function GameOver(x, y, img, w, h) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = img;
    this.width = w;
    this.height = h;
  }

  GameOver.prototype.drawGameOver = function () {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
}
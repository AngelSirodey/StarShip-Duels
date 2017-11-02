
function Ball(x, y, vx, vy, img, w, h) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.image = new Image();
    this.image.src = img;
    this.width = w;
    this.height = h;
};

Ball.prototype.drawAsteroid = function () {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
}

Ball.prototype.moveAsteroid = function () {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y + this.vy > canvas.height - 100 || this.y + this.vy < 0) {
        this.vy *= -1;
    }
    if (this.x + this.vx > canvas.width -100 || this.x + this.vx < 0) {
        this.vx *= -1;
    }
    this.drawAsteroid();
}


 Ball.prototype.moveAsteroid2 = function () {
    this.x -= this.vx;
    this.y -= this.vy;
    if (this.y - this.vy > canvas.height - 100 || this.y - this.vy < 0) {
        this.vy *= -1;
    }
    if (this.x - this.vx > canvas.width -100 || this.x - this.vx < 0) {
        this.vx *= -1;
    }
}


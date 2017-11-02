function Shot(x, y, img, w, h) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = img;
    this.width = w;
    this.height = h;
    this.active = true;
}

Shot.prototype.update = function () {
     this.x += 20;
     this.drawBullet();
     
}

Shot.prototype.update2 = function () {
    this.x -= 20;
    this.drawBullet();
}

Shot.prototype.drawBullet = function () {   
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  
}





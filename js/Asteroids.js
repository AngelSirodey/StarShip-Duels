
function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 10;
    this.vy = 10;
    this.radius = 25;
    this.image = new Image();
    this.image.src = "../img/asteroid.png";
};

Ball.prototype.drawAsteroid = function () {
    ctx.drawImage(this.image, this.x, this.y, 100, 100);
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

// for (var i = 0; i < this.asteroidTotal; i++) {
//     this.asteroids.push([this.asteroid_x, this.asteroid_y, this.asteroid_width, this.asteroid_height, this.speed]);
//     this.asteroid_x += this.asteroid_width + 60;
// }

//---------------------------------------

// function Asteroid(x, y, img, w, h) {
//     this.x = 700;
//     this.y = 400;
//     this.vx= 5,
//     this.vy= 2,
//     this.image = new Image();
//     this.image.src = img;
//     this.width = w;
//     this.height = h;
// }

// Asteroid.prototype.drawAsteroid = function () {
//     ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

// }


// Asteroid.prototype.asteroidMove = function () {
//     ctx.clearRect(0,0, canvas.width, canvas.height);
//     this.drawAsteroid();
//     this.x += this.vx;
//     this.y += this.vy;
//     setInterval(asteroidMove, 20)
// }



// ------------------------------------------


// function Asteroid() {
//     this.asteroidTotal = 5;
//     this.asteroids = [];
//     this.asteroid_x = 500;
//     this.asteroid_y = 450;
//     this.asteroid_width = 50;
//     this.asteroid_height = 50;
//     this.speed = 3;
// }
// for (var i = 0; i < this.asteroidTotal; i++) {
//     this.asteroids.push([this.asteroid_x, this.asteroid_y, this.asteroid_width, this.asteroid_height, this.speed]);
//     this.asteroid_x += this.asteroid_width + 60;
// }


// Asteroid.prototype.drawAsteroids = function () {
//     for (var i = 0; i < this.asteroids.length; i++) {
//         var img = new Image();
//         ctx.img.src = '../img/asteroid.png';
//         ctx.drawImage(this.asteroids[i][0], this.asteroids[i][1], this.asteroid_width, this.asteroid_height);

//     }
// }



// Asteroid.prototype.moveAsteroids = function () {
//     for (var i = 0; i < this.asteroids.length; i++) {
//         if (this.asteroids[i][1] < height) {
//             this.asteroids[i][1] += this.asteroids[i][4];
//         } else if (this.asteroids[i][1] > height - 1) {
//             this.asteroids[i][1] = -45;
//         }
//     }
// }
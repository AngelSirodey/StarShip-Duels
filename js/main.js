var shipBullets = [];
var shipBullets2 = [];
var ctx

window.onload = function () {
    ctx = document.getElementById("canvas").getContext("2d");
    document.getElementById('btn').onclick = function () {
        startGame()
    };


    document.onkeydown = function (e) {

        switch (e.keyCode) {
            case 87: // W
                game.ship.upMove();
                break;
            case 83: // S
                game.ship.downMove();
                break;
            case 65: // A
                game.ship.leftMove();
                break;
            case 68: // D
                game.ship.rightMove();
                break;
            case 49: // 1
                game.shot = new Shot(game.ship.x + 30, game.ship.y + 18, "../img/red222-shot.png", 60, 40);
                shipBullets.push(game.shot);
                break;
            case 38: // Up arrow
                game.ship2.upMove();
                break;
            case 40: // Down arrow
                game.ship2.downMove();
                break;
            case 37: // left arrow
                game.ship2.leftMove2();
                break;
            case 39: // right arrow
                game.ship2.rightMove2();
                break;
            case 190: // . 
                game.shot2 = new Shot(game.ship2.x + 2, game.ship2.y + 5, "../img/green222-shot.png", 90, 70)
                shipBullets2.push(game.shot2);
                break;
        }
        game.UpdateCanvas();
    }
};

function startGame() {
    game = new StarShipCanvas();
    game.ship.drawShip();
    game.ship2.drawShip();
    game.asteroidPool[0].drawAsteroid();
    game.asteroidPool[0].moveAsteroid();
    requestAnimationFrame(animate);
}

function animate() {
    ctx.clearRect(0, 0, 1600, 900);
    game.ship.drawShip();
    game.ship2.drawShip();
    game.asteroidPool[0].drawAsteroid();
    game.asteroidPool[0].moveAsteroid();
    updater();
    updater2();
    updateAsteroid();
    requestAnimationFrame(animate);

}

function updater() {
    for (var i = 0; i < shipBullets.length; i++) {
        shipBullets[i].update();
        checkCollisions();
    }
}

function updater2() {
    for (var i = 0; i < shipBullets2.length; i++) {
        shipBullets2[i].update2()
        checkCollisions2();
    }
}

function updateAsteroid() {
    for (var i = 0; i < game.asteroidPool.length; i++) {
        game.asteroidPool[i].moveAsteroid();
        asteroidCollision()
    }
}
//  Check for bullet / enemy collisions.
function checkCollisions() {
    for (var i = 0; i < shipBullets.length; i++) {
        //var ship = shipBullets[i];
        var isColliding = false;

        if (shipBullets[i].x <= game.ship2.x + game.ship2.width &&
            shipBullets[i].x + shipBullets[i].width >= game.ship2.x &&
            shipBullets[i].y <= game.ship2.y + game.ship2.height &&
            shipBullets[i].height + shipBullets[i].y >= game.ship2.y) {
            //  Remove the bullet, set 'isColliding' so we don't process this bullet again.
            shipBullets.splice(i--, 1);
            isColliding = true;
            game.ship2 = new Ship(game.ship2.x, game.ship2.y, "../img/explo.png", 150, 150);
            break;
        }
    }
    if (isColliding) {
        console.log('death');
    }
}

function checkCollisions2() {
    for (var i = 0; i < shipBullets2.length; i++) {
        //var ship = shipBullets[i];
        var isColliding = false;

        if (shipBullets2[i].x <= game.ship.x + game.ship.width &&
            shipBullets2[i].x + shipBullets2[i].width >= game.ship.x &&
            shipBullets2[i].y <= game.ship.y + game.ship.height &&
            shipBullets2[i].height + shipBullets2[i].y >= game.ship.y) {
            //  Remove the bullet, set 'isColliding' so we don't process this bullet again.
            shipBullets.splice(i--, 1);
            isColliding = true;
            game.ship = new Ship(game.ship.x, game.ship.y, "../img/explo.png", 150, 150);
            break;
        }
    }
    if (isColliding) {
        console.log('death');
    }
}

function asteroidCollision() {
    for (var i = 0; i < game.asteroidPool.length; i++) {
        
        var isColliding = false;
        if (game.asteroidPool[i].x <= game.ship.x + game.ship.width &&
            game.asteroidPool[i].x + game.asteroidPool[i].width >= game.ship.x &&
            game.asteroidPool[i].y <= game.ship.y + game.ship.height &&
            game.asteroidPool[i].height + game.asteroidPool[i].y >= game.ship.y) {
                game.asteroidPool.splice(i--, 1);
            isColliding = true;
            game.ship = new Ship(game.ship.x, game.ship.y, "../img/explo.png", 150, 150);
            break;
        }
        if (game.asteroidPool[i].x <= game.ship2.x + game.ship2.width &&
            game.asteroidPool[i].x + game.asteroidPool[i].width >= game.ship2.x &&
            game.asteroidPool[i].y <= game.ship2.y + game.ship2.height &&
            game.asteroidPool[i].height + game.asteroidPool[i].y >= game.ship2.y) {
            
            isColliding = true;
            game.ship2 = new Ship(game.ship2.x, game.ship2.y, "../img/explo.png", 150, 150);           
            break;
        }
    }
    if (isColliding) {
        console.log('death');
    }
}

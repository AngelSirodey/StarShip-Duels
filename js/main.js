var shipBullets = [];
var shipBullets2 = [];
var ctx
window.onload = function () {
    ctx = document.getElementById("canvas").getContext("2d");
    document.getElementById('startButton').onclick = function () {
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
                game.ship2.leftMove();
                break;
            case 39: // right arrow
                game.ship2.rightMove();
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
    requestAnimationFrame(animate);
}

function animate() {
    ctx.clearRect(0, 0, 1600, 900);
    game.ship.drawShip();
    game.ship2.drawShip();
    game.shot.update();
    game.shot2.update2();
    checkCollisions();
    checkCollisions2();
    requestAnimationFrame(animate);
}

//  Check for bullet / enemy collisions.
function checkCollisions() {
    for (var i = 0; i < shipBullets.length; i++) {
        //var ship = shipBullets[i];
        var isColliding = false;

        if (game.shot.x <= game.ship2.x + game.ship2.width &&
            game.shot.x + game.shot.width >= game.ship2.x &&
            game.shot.y <= game.ship2.y + game.ship2.height &&
            game.shot.height + game.shot.y >= game.ship2.y) {

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

        if (game.shot2.x <= game.ship.x + game.ship.width &&
            game.shot2.x + game.shot2.width >= game.ship.x &&
            game.shot2.y <= game.ship.y + game.ship.height &&
            game.shot2.height + game.shot2.y >= game.ship.y) {

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

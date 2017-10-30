window.onload = function () {
    document.getElementById('startButton').onclick = function () {
        startGame()


    };

    function startGame() {
        var canvas = new StarShipCanvas();
        var ship = new Ship();
        var shoot = new Shoot();
        ship.drawShip(canvas);

        var x = setInterval(function () {
            canvas.UpdateCanvas(ship)
        }, 2000);

        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 38:
                    ship.upMove();
                    break;
                case 40:
                    ship.downMove();
                    break;
                case 37:
                    ship.leftMove();
                    break;
                case 39:
                    ship.rightMove();
                    break;
                case 190: // . button
                    shoot.drawBullet(canvas);
                    shoot.movebullet();
                    break;
            }
            canvas.UpdateCanvas(ship, shoot);

        }

    }
}
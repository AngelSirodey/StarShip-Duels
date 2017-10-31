window.onload = function () {
    document.getElementById('startButton').onclick = function () {
        startGame()
    };

    function startGame() {
        var canvas = new StarShipCanvas();
        var ship = new Ship();
        ship.drawShip(canvas);
        var bullets = [];


        shot = new Shot(ship);
        function animate() {
            canvas.ctx.clearRect(0, 0, 1600, 900);
            ship.drawShip(canvas)
            shot.update()
            shot.drawBullet(canvas)
            requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
        
        // setInterval(function(){
        //     if(shot) {
        //         shot.update();
        //         canvas.ctx.clearRect(0, 0, 1600, 900);
        //         ship.drawShip(canvas);
        //         shot.drawBullet(canvas);
        //     } 
        // }, 1000/60);

        // var x = setInterval(function () {
        //     canvas.UpdateCanvas(ship, ship2, shot);
        // }, 2000);

        document.onkeydown = function (e) {

            switch (e.keyCode) {
                case 87: // W
                    ship.upMove();
                    break;
                case 83: // S
                    ship.downMove();
                    break;
                case 65: // A
                    ship.leftMove();
                    break;
                case 68: // D
                    ship.rightMove();
                    break;
                case 49: // 1
                    shot = new Shot(ship);
                    shot.drawBullet(canvas);
                    break;
                // case 38: // Up arrow
                //     ship2.upMove();
                //     break;
                // case 40: // Down arrow
                //     ship2.downMove();
                //     break;
                // case 37: // left arrow
                //     ship2.leftMove();
                //     break;
                // case 39: // right arrow
                //     ship2.rightMove();
                //     break;
                // case 190: // . 
                //     // setInterval(function() {
                //     // canvas.UpdateCanvas(ship, ship2, shot);

                //     // }, 1)
                //     break;

            }
            canvas.UpdateCanvas(ship);

        }



    }
}
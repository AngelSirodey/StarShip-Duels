
function StarShipCanvas() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
}



StarShipCanvas.prototype.UpdateCanvas = function (ship) {
    this.ctx.clearRect(0, 0, 1600, 900);
    ship.drawShip(this);

}





function angleIterate() {
    this.angle = 0;
    this.fullIteration = Math.PI * 2;
    this.iterateBy = Math.PI / 512;
   
    this.getNextAngle = function () {
        if (this.angle < this.fullIteration ) {
            this.angle += this.iterateBy;
        } else {
            this.angle = 0;
        }
        return this.angle;
    }
}

module.exports = angleIterate;
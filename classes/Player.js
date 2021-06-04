class Player extends GameObject {
    constructor(x, y, ctx) {
        super(x, y, ctx);
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 18, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "red";
        this.ctx.stroke();
    }

    update() {
        
    }
}
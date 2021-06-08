class Enemy extends GameObject {
    constructor(x, y, ctx, game, width, height) {
        super(x, y, ctx);
        this.game = game;
        this.radius = getRandomNumber(5, 30);
        this.width = this.radius * 2;
        this.height = this.width;
        this.speed = getRandomNumber(1, 5);
    }

    draw() {
        this.ctx.drawImage(
            ASTEROID_IMAGE, 
            this.x, 
            this.y, 
            this.width, 
            this.height
        );
    }

    update() {
        this.y += this.speed;

        if (this.y + this.height > 480) {
            this.game.removeObject(this);
        }
    }
}
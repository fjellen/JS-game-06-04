class Game {
    constructor(ctx) {
        this.gameObjects = [];
        this.level = 0;

        this.ctx = ctx;

        const player = new Player(120, 300, ctx);

        this.gameObjects.push(player);
    }

    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, 640, 480);
        this.gameObjects.forEach(function(obj){
            obj.draw();
        })
    }

    update() {
        this.gameObjects.forEach(function(obj){
            obj.update();
        })
        requestAnimationFrame(() => this.update());
        this.draw();
    }

    start() {
        this.update();
    }
}
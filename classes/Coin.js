class Coin extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
        this.radius = 30;
        this.width = this.radius * 2;
        this.height = this.width;
    }

    draw() {
        this.ctx.drawImage(
            COIN_IMAGE, 
            this.x, 
            this.y, 
            this.width, 
            this.height
        );
    }

    update() {
        this.game.gameObjects.forEach(function(gameObject){
            if(gameObject.constructor.name === "Player") {

                if ((this.y - this.radius) <= gameObject.y + gameObject.radius) {

                    if ((this.y + this.radius) >= gameObject.y - gameObject.radius) {
                      

                        if ((this.x - this.radius) <= gameObject.x + gameObject.radius) {

                            if ((this.x + this.radius) >= gameObject.x - gameObject.radius) {
                                this.game.whenCoinRemoved();
                                this.game.removeObject(this);
                            }
                            
                        }
                    }
                    
                }
            }
        }.bind(this)    );
    }
}
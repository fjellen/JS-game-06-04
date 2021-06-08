class Player extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
        this.radius = 18;
        this.width = this.radius * 2;
        this.height = this.width;
    }

    draw() {
        this.ctx.drawImage(
            PLAYER_IMAGE, 
            this.x, 
            this.y, 
            this.width, 
            this.height
        );
    }

    update() {
        if (this.game.keys["d"]) {
            this.x += 3;
        }
        
        if (this.game.keys["a"]) {
            this.x -= 3;
        }

        if (this.game.keys["w"]) {
            this.y -= 3;
        }

        if (this.game.keys["s"]) {
            this.y += 3;
        }

        this.game.gameObjects.forEach(function(gameObject){
            if(gameObject.constructor.name === "Enemy") {

                if ((this.y - this.radius) <= gameObject.y + gameObject.radius) {

                    if ((this.y + this.radius) >= gameObject.y - gameObject.radius) {
                      

                        if ((this.x - this.radius) <= gameObject.x + gameObject.radius) {

                            if ((this.x + this.radius) >= gameObject.x - gameObject.radius) {
                                this.game.whenEnemyHits();
                            }
                            
                        }
                    }
                    
                }
            }
        }.bind(this)    );
    }
}
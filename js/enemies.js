class Enemy {
    constructor(ctx, enemyPosX, enemyPosY, enemyHeight, enemyVelocity, playerPosX, playerPosY, canvasSizeW, canvasSizeH) {
        this.ctx = ctx
        this.enemyPos = { x: enemyPosX, y: enemyPosY }
        this.enemyVelocity = enemyVelocity
        this.enemySize = { h: enemyHeight }
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.RandomWordNumber = Math.floor(Math.random() * htmlWords.length)
        this.canvasSize = { w: canvasSizeW, h: canvasSizeH }
    }

    draw() {
        this.ctx.font = "20px 'Press Start 2P'"
        this.ctx.shadowColor = "rgba(0,0,0,0.3)";
        this.ctx.fillStyle = "white"
        this.ctx.fillText(htmlWords[this.RandomWordNumber], this.enemyPos.x, this.enemyPos.y)
        this.checkWallCollisions()

    }




    move(playerPos) {
        // normalize a vector

        this.enemyPos.x += (playerPos.x - this.enemyPos.x) * 0.01 * this.enemyVelocity
        this.enemyPos.y += (playerPos.y - this.enemyPos.y) * 0.01 * this.enemyVelocity

        // cambiar este 25 y si quieres que vaya al centro del jugador en y pasarle al enemy constructor playerheight y partirlo entre dos
    }

    checkWallCollisions() {
        if (this.enemyPos.x >= this.canvasSize.w - this.enemySize.w) {
            this.enemyPos.x = this.canvasSize.w - this.enemySize.w
        }
        if (this.enemyPos.x <= 0) {
            this.enemyPos.x = 0
        }
        if (this.enemyPos.y >= this.canvasSize.h - this.enemySize.h) {
            this.enemyPos.y = this.canvasSize.h - this.enemySize.h
        }
        if (this.enemyPos.y <= 0) {
            this.enemyPos.y = 0
        }
    }


}
class Enemy {
    constructor(ctx, enemyPosX, enemyPosY, enemyHeight, enemyVelocity, playerPosX, playerPosY, canvasSizeW, canvasSizeH, enemyColor) {
        this.ctx = ctx
        this.enemyPos = { x: enemyPosX, y: enemyPosY }
        this.enemyVelocity = enemyVelocity
        this.enemySize = { h: enemyHeight }
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.RandomWordNumber = Math.floor(Math.random() * enemyWords.length)
        this.canvasSize = { w: canvasSizeW, h: canvasSizeH }
        this.enemyColor = enemyColor
    }

    draw() {
        this.ctx.font = "20px 'Press Start 2P'"
        this.ctx.shadowColor = "rgba(0,0,0,0.3)";
        this.ctx.fillStyle = this.enemyColor
        this.ctx.fillText(enemyWords[this.RandomWordNumber], this.enemyPos.x, this.enemyPos.y)
        this.checkWallCollisions()
    }

    move(playerPos) {
        this.enemyPos.x += (playerPos.x - this.enemyPos.x) * 0.01 * this.enemyVelocity
        this.enemyPos.y += (playerPos.y - this.enemyPos.y) * 0.01 * this.enemyVelocity
    }

    checkWallCollisions() {
        if (this.enemyPos.x >= this.canvasSize.w - this.enemySize.w) {
            this.enemyPos.x = this.canvasSize.w - this.enemySize.w
        }
        if (this.enemyPos.x < 1) {
            this.enemyPos.x = 0
        }
        if (this.enemyPos.y >= this.canvasSize.h - this.enemySize.h) {
            this.enemyPos.y = this.canvasSize.h - this.enemySize.h
        }
        if (this.enemyPos.y < 1) {
            this.enemyPos.y = 0
        }
    }


}
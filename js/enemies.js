class Enemy {
    constructor(ctx, enemyPosX, enemyPosY, enemyWidth, enemyHeight, enemyVelocity, playerPosX, playerPosY) {
        this.ctx = ctx
        this.enemyPos = { x: enemyPosX, y: enemyPosY }
        this.enemyVelocity = enemyVelocity
        this.enemySize = { w: enemyWidth, h: enemyHeight }
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.RandomWordNumber = Math.floor(Math.random() * htmlWords.length)
    }

    draw() {
        this.ctx.font = "20px Comic Sans MS"
        this.ctx.fillStyle = "white"
        this.ctx.fillText(htmlWords[this.RandomWordNumber], this.enemyPos.x, this.enemyPos.y)
    }

    move(playerPos) {
        playerPos.x - this.enemyPos.x > 0 ? this.enemyPos.x += this.enemyVelocity : this.enemyPos.x -= this.enemyVelocity
        playerPos.y - this.enemyPos.y > 0 ? this.enemyPos.y += this.enemyVelocity : this.enemyPos.y -= this.enemyVelocity
    }




}
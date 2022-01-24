class Enemy {
    constructor(ctx, enemyPosX, enemyPosY, enemyWidth, enemyHeight, enemyVelocity, playerPosX, playerPosY) {
        this.ctx = ctx
        this.enemyPos = { x: enemyPosX, y: enemyPosY }
        this.enemyVelocity = enemyVelocity
        this.enemySize = { w: enemyWidth, h: enemyHeight }
        this.playerPos = { x: playerPosX, y: playerPosY }

    }


    draw() {
        // this.ctx.fillRect(this.enemyPos.x, this.enemyPos.y, this.enemySize.w, this.enemySize.h)
        // this.ctx.fillStyle = 'black'
        this.ctx.font = "20px Comic Sans MS"
        this.ctx.fillStyle = "white"
        console.log(this.htmlWords)
        // this.ctx.fillText(this.htmlWords[this.getRandomWord], this.enemyPos.x, this.enemyPos.y)
    }

    move(playerPos) {
        playerPos.x - this.enemyPos.x > 0 ? this.enemyPos.x += this.enemyVelocity : this.enemyPos.x -= this.enemyVelocity
        playerPos.y - this.enemyPos.y > 0 ? this.enemyPos.y += this.enemyVelocity : this.enemyPos.y -= this.enemyVelocity


    }


}
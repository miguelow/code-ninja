class Enemy {
    constructor(ctx, enemyPosX, enemyPosY, enemyWidth, enemyHeight, enemyVelocity, playerPosX, playerPosY) {
        this.ctx = ctx
        this.enemyPos = { x: enemyPosX, y: enemyPosY }
        this.enemyVelocity = enemyVelocity
        this.enemySize = { w: enemyWidth, h: enemyHeight }
        this.playerPos = {x: playerPosX, y: playerPosY}
        console.log(playerPosX, playerPosY)

    }


    draw() {
        this.ctx.fillRect(this.enemyPos.x, this.enemyPos.y, this.enemySize.w, this.enemySize.h)
        this.ctx.fillStyle = 'black'
    }
    
    move(playerPos) {
        console.log(this.playerPos)
        console.log(this.enemyPos)

        // if (this.playerPos.x < this.enemyPos.x){
        //     this.enemyPos.x -= this.enemyVelocity
        // }
        // if (this.playerPos.x > this.enemyPos.x){
        //     this.enemyPos.x += this.enemyVelocity
        // }
        // if (this.playerPos.y > this.enemyPos.y){
        //     this.enemyPos.y += this.enemyVelocity
        // }
        // if (this.playerPos.y > this.enemyPos.y){
        //     this.enemyPos.y -= this.enemyVelocity
        // }
        this.enemyPos.x += playerPos.x - this.enemyPos.x
        this.enemyPos.y += playerPos.y - this.enemyPos.y

    }




}
class Enemy {
    constructor(ctx, enemyPosX, enemyPosY, enemyWidth, enemyHeight, enemyVelocity,) {
        this.ctx = ctx
        this.enemyPos = { x: enemyPosX, y: enemyPosY }
        this.enemyVelocity = enemyVelocity
        this.enemySize = { w: enemyWidth, h: enemyHeight }

    }


    draw() {
        this.ctx.fillRect(this.enemyPos.x, this.enemyPos.y, this.enemySize.w, this.enemySize.h)
        this.ctx.fillStyle = 'black'
        this.move()
    }

    move() {

    }




}
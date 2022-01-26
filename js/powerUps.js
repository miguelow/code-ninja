class PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer) {
        this.ctx = ctx
        this.powerUpPos = { x: powerUpPosX, y: powerUpPosY }
        this.powerUpSize = { w: 50, h: 50 }
        this.powerUpImage = new Image()
        this.powerUpImage.src = powerUpImage
        this.powerUpTimer = powerUpTimer

    }


    drawPowerUp() {
        this.ctx.drawImage(this.powerUpImage, this.powerUpPos.x, this.powerUpPos.y, this.powerUpSize.w, this.powerUpSize.h)
        this.powerUpTimer++
    }

    clearTimer() {
        this.powerUpTimer = 0
    }
}

class PowerUpIce extends PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer, enemiesArray) {
        super(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer)
        this.enemiesArray = enemiesArray
    }
    // Freeze enemies
    activateBooster(){
        this.enemiesArray.forEach(enemy=>{
            
            if (1 < this.powerUpTimer < 490){
                enemy.enemyVelocity = 0
            }
            
        })
    }


}

class PowerUpBomb extends PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer, playerPosX, playerPosY, enemyPosX, enemyPosY, enemiesArray) {
        super(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer)
        this.playerPos = { x:playerPosX, y: playerPosY }
        this.enemyPos = { x:enemyPosX, y:enemyPosY }
        this.enemiesArray=enemiesArray
    }
    activateBooster() {
        console.log(this.enemiesArray)
        console.log(this.enemies)
        this.enemiesArray.forEach(enemy=>{
            console.log('activar bomba')
            let dXEnemyPlayer = this.enemyPos.x - this.playerPos.x
            let dYEnemyPlayer = this.enemyPos.y - this.playerPos.y
            console.log(dXEnemyPlayer, dYEnemyPlayer, enemy)
    
            if (((dXEnemyPlayer < 200 && dXEnemyPlayer > 0) && (dYEnemyPlayer < 200 && dYEnemyPlayer > 0))|| ((dXEnemyPlayer > -200 && dXEnemyPlayer < 0)&& (dYEnemyPlayer > -200 && dYEnemyPlayer < 0))) {
                let indexEnemy = this.enemies.indexOf(enemy)
                if (indexEnemy != -1) this.enemies.splice(indexEnemy, 1)
            }
            
        })
    }
}

class PowerUpGravity extends PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer, gravity) {
        super(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer)
        this.gravity = gravity 
    }
    activateBooster() {
        console.log('activar gravedad')

    }
}
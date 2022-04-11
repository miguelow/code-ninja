class PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer) {
        this.ctx = ctx
        this.powerUpPos = { x: powerUpPosX, y: powerUpPosY }
        this.powerUpSize = { w: 75, h: 75 }

        this.powerUpImage = new Image()
        this.powerUpImage.src = powerUpImage
        this.powerUpTimer = powerUpTimer
        this.powerUpImage.frames = 4
        this.powerUpImage.framesIndex = 0

        this.explosion = new Image()
        this.explosion.src = "imgs/fueguito.png"
        this.explosion.frames = 16
        this.explosion.framesIndex = 0
        this.explosionChecker = false

    }


    drawPowerUp() {
        this.ctx.drawImage(this.powerUpImage, this.powerUpImage.framesIndex * (this.powerUpImage.width / this.powerUpImage.frames), 0, this.powerUpImage.width / this.powerUpImage.frames, this.powerUpImage.height, this.powerUpPos.x, this.powerUpPos.y, this.powerUpSize.w, this.powerUpSize.h)
        this.powerUpTimer++
    }

    clearTimer() {
        this.powerUpTimer = 0
    }
}

class PowerUpIce extends PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer, enemiesArray, enemyColor) {
        super(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer)
        this.enemiesArray = enemiesArray
        this.enemyColor = enemyColor
        this.explosionChecker = false
    }
    // Freeze enemies
    activateBooster() {
        this.enemiesArray.forEach(enemy => {

            if (1 < this.powerUpTimer < 490) {
                enemy.enemyVelocity = 0
                enemy.enemyColor = "#99FFFF"
            }
            if (this.powerUpTimer > 491) {
                enemy.enemyColor = "white"
            }

        })
        return this.enemiesArray
    }

    animate(framesCounter) {
        if (framesCounter % 10 == 0) {
            this.powerUpImage.framesIndex++
        }
        if (this.powerUpImage.framesIndex >= this.powerUpImage.frames) {
            this.powerUpImage.framesIndex = 0
        }
    }

}

class PowerUpBomb extends PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer, playerPosX, playerPosY, enemiesArray) {
        super(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer)
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.enemiesArray = enemiesArray
        this.explosionChecker = true
    }
    activateBooster(playerPos, enemiesArray) {
        return enemiesArray.filter(enemy => {
            let dXEnemyPlayer = enemy.enemyPos.x - playerPos.x
            let dYEnemyPlayer = enemy.enemyPos.y - playerPos.y

            if ((dXEnemyPlayer < 220 && dXEnemyPlayer > -220) && (dYEnemyPlayer < 220 && dYEnemyPlayer > -220)) {
                return false
            }
            else return true

        })
    }

    animate(framesCounter) {
        if (framesCounter % 10 == 0) {
            this.powerUpImage.framesIndex++
        }
        if (this.powerUpImage.framesIndex >= this.powerUpImage.frames) {
            this.powerUpImage.framesIndex = 0
        }
    }

}

class PowerUpGravity extends PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer, repelValue) {
        super(ctx, powerUpPosX, powerUpPosY, powerUpImage, powerUpTimer)
        this.repel = repelValue
        this.explosionChecker = false
    }
    activateBooster(playerPos, enemiesArray) {
        enemiesArray.forEach(enemy => {
            enemy.enemyVelocity *= this.repel
        })
        return enemiesArray

    }

    animate(framesCounter) {
        if (framesCounter % 10 == 0) {
            this.powerUpImage.framesIndex++
        }
        if (this.powerUpImage.framesIndex >= this.powerUpImage.frames) {
            this.powerUpImage.framesIndex = 0
        }
    }


}
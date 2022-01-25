class PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, powerUpImage) {
        this.ctx = ctx
        this.powerUpPos = { x: powerUpPosX, y: powerUpPosY }
        this.powerUpSize = { w: 50, h: 50 }
        this.powerUpImage = new Image()
        this.powerUpImage.src = powerUpImage

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
    constructor(ctx, powerUpPosX, powerUpPosY, powerUpImage, enemyVelocity) {
        super(ctx, powerUpPosX, powerUpPosY, powerUpImage)
        this.enemyVelocity = enemyVelocity
    }


}

class PowerUpBomb extends PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, powerUpImage) {
        super(ctx, powerUpPosX, powerUpPosY, powerUpImage)

    }
}

class PowerUpGravity extends PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, powerUpImage) {
        super(ctx, powerUpPosX, powerUpPosY, powerUpImage)

    }
}
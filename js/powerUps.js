class PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, duration, powerUpImage) {
        this.ctx = ctx
        this.powerUpPos = { x: powerUpPosX, y: powerUpPosY }
        this.powerUpSize = { w: 50, h: 50 }
        this.duration = duration
        this.powerUpImage = new Image()
        this.powerUpImage.src = powerUpImage
    }


    drawPowerUp() {
        this.ctx.drawImage(this.powerUpImage, this.powerUpPos.x, this.powerUpPos.y, this.powerUpSize.w, this.powerUpSize.h)
    }
}

class PowerUpIce extends PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, duration, powerUpImage) {
        super(ctx, powerUpPosX, powerUpPosY, duration, powerUpImage)

    }
}
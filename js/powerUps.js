class PowerUp{
    constructor(ctx, powerUpPosX, powerUpPosY, duration, powerUpImage){
        this.ctx = ctx
        this.powerUpPos = { x: powerUpPosX, y: powerUpPosY }
        this.powerUpSize = { w: 20, h: 20 }
        this.duration = duration
        this.powerUpImage = powerUpImage
    }
    

    drawPowerUp(){
        this.ctx.drawImage(this.powerUpImage, this.powerUpPos.x, this.powerUpPos.y, this.powerUpSize.x,this.powerUpSize.y)
    }
}

class PowerUpIce extends PowerUp {
    constructor(ctx, powerUpPosX, powerUpPosY, duration, powerUpImage){
        super(ctx, powerUpPosX, powerUpPosY, duration, powerUpImage)

    }
}
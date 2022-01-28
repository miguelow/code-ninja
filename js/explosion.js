class Explosion {
    constructor(ctx, powerUpPosX, powerUpPosY, imageWidth, imageHeight, framesCounter) {
        this.ctx = ctx
        this.powerUpPos = { x: powerUpPosX, y: powerUpPosY }
        this.imageSize = { w: imageWidth, h: imageHeight }
        this.framesCounter = framesCounter
        this.image = new Image()
        this.image.src = "imgs/fueguito.png"
        this.image.frames = 16
        this.image.framesIndex = 0

    }
    draw(framesCounter) {
        this.ctx.drawImage(this.image,
            this.image.framesIndex * (this.image.width / this.image.frames + 8),
            0,
            this.image.width / this.image.frames,
            this.image.height,
            this.powerUpPos.x - 200,
            this.powerUpPos.y - 200,

            this.imageSize.w,
            this.imageSize.h
        )
        this.animateExplosion(framesCounter)
    }
    animateExplosion(framesCounter) {
        if (framesCounter % 3 == 0) {
            this.image.framesIndex++
        }
    }

}
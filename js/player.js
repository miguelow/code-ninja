class Player {
    constructor(ctx, playerWidth, playerHeight, playerPosX, playerPosY, playerVelocity, playerImgSrc, canvasSize) {
        this.ctx = ctx
        this.playerSize = { w: playerWidth, h: playerHeight }
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.playerVelocity = playerVelocity
        this.image = new Image()
        this.image.src = playerImgSrc
        this.canvasSize = canvasSize
    }


    draw() {
        this.ctx.drawImage(this.image, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h,)
        this.checkWallCollisions()
    }

    checkWallCollisions() {
        if (this.playerPos.x >= this.canvasSize.w - this.playerSize.w) {
            this.playerPos.x = this.canvasSize.w - this.playerSize.w
        }
        if (this.playerPos.x <= 0) {
            this.playerPos.x = 0
        }
        if (this.playerPos.y >= this.canvasSize.h - this.playerSize.h) {
            this.playerPos.y = this.canvasSize.h - this.playerSize.h
        }
        if (this.playerPos.y <= 0) {
            this.playerPos.y = 0
        }
    }

}
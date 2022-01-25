class Player {
    constructor(ctx, playerWidth, playerHeight, playerPosX, playerPosY, playerVelocity, playerImgSrc) {
        this.ctx = ctx
        this.playerSize = { w: playerWidth, h: playerHeight }
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.playerVelocity = playerVelocity
        this.image = new Image()
        this.image.src = playerImgSrc
    }


    draw() {
        this.ctx.drawImage(this.image, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h,)
    }
}
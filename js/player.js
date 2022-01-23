class Player {
    constructor(ctx, playerWidth, playerHeight, playerPosX, playerPosY, playerVelocity, keys, playerImgSrc) {
        this.ctx = ctx
        this.playerSize = { w: playerWidth, h: playerHeight }
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.keys = keys
        this.playerVelocity = playerVelocity
        this.image = new Image()
        this.image.src = playerImgSrc

    }


    draw() {
        this.ctx.drawImage(this.image, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h,)

    }

    moveUp() { this.playerPos.y -= this.playerVelocity }
    moveLeft() { this.playerPos.x -= this.playerVelocity }
    moveDown() { this.playerPos.y += this.playerVelocity }
    moveRight() { this.playerPos.x += this.playerVelocity }

}
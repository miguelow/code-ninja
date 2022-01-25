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

    move(code) {
        if (code === 'ArrowUp') {
            this.playerPos.y -= this.playerVelocity
        }
        if (code === 'ArrowLeft') {
            this.playerPos.x -= this.playerVelocity
        }
        if (code === 'ArrowDown') {
            this.playerPos.y += this.playerVelocity
        }
        if (code === 'ArrowRight') {
            this.playerPos.x += this.playerVelocity
        }
    }

}
class Player {
    constructor(ctx, playerWidth, playerHeight, playerPosX, playerPosY, playerVelocity, playerImgSrc, canvasSize) {
        this.ctx = ctx
        this.playerSize = { w: playerWidth, h: playerHeight }
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.playerVelocity = playerVelocity
        this.image = new Image()
        this.image.src = "/imgs/spaceman/spaceman-walk-down.png"
        this.canvasSize = canvasSize
        this.image.frames = 4
        this.image.framesIndex = 0
    }


    draw(framesCounter) {
        this.ctx.drawImage(this.image, this.image.framesIndex * (this.image.width / this.image.frames), 0, this.image.width / this.image.frames, this.image.height, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h,)
        this.animate(framesCounter)
        this.changeImageDirection()
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

    animate(framesCounter) {
        if (framesCounter % 10 == 0) {
            this.image.framesIndex++
        }
        if (this.image.framesIndex >= this.image.frames) {
            this.image.framesIndex = 0
        }
    }

    changeImageDirection() {
        document.addEventListener('keydown', e => {
            const { code } = e
            code === 'ArrowUp' && (this.image.src = "/imgs/spaceman/spaceman-walk-up.png")
            code === 'ArrowRight' && (this.image.src = "/imgs/spaceman/spaceman-walk-right.png")
            code === 'ArrowLeft' && (this.image.src = "/imgs/spaceman/spaceman-walk-left.png")
            code === 'ArrowDown' && (this.image.src = "/imgs/spaceman/spaceman-walk-down.png")
        })
    }



}
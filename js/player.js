class Player {
    constructor(ctx, playerWidth, playerHeight, playerPosX, playerPosY, canvasSize) {
        this.ctx = ctx
        this.playerSize = { w: playerWidth, h: playerHeight }
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.imageUp = new Image()
        this.imageUp.src = 'imgs/spaceman/spaceman-walk-up.png'
        this.imageDown = new Image()
        this.imageDown.src = 'imgs/spaceman/spaceman-walk-down.png'
        this.imageLeft = new Image()
        this.imageLeft.src = 'imgs/spaceman/spaceman-walk-left.png'
        this.imageRight = new Image()
        this.imageRight.src = 'imgs/spaceman/spaceman-walk-right.png'
        this.image = this.imageDown
        this.canvasSize = canvasSize
        this.imageDown.frames = 4
        this.imageDown.framesIndex = 0
        this.imageUp.frames = 4
        this.imageUp.framesIndex = 0
        this.imageLeft.frames = 4
        this.imageLeft.framesIndex = 0
        this.imageRight.frames = 4
        this.imageRight.framesIndex = 0
    }


    draw(framesCounter) {
        this.ctx.drawImage(this.image,
            this.image.framesIndex * (this.image.width / this.image.frames),
            0,
            this.image.width / this.image.frames,
            this.image.height, this.playerPos.x,
            this.playerPos.y - 22, this.playerSize.w,
            this.playerSize.h)

        this.animate(framesCounter)
        this.changeImageDirection()
        this.checkWallCollisions()
    }

    checkWallCollisions() {
        if (this.playerPos.x >= this.canvasSize.w - this.playerSize.w) {
            this.playerPos.x = this.canvasSize.w - this.playerSize.w
        }
        if (this.playerPos.x < 1) {
            this.playerPos.x = 0
        }
        if (this.playerPos.y >= this.canvasSize.h - this.playerSize.h) {
            this.playerPos.y = this.canvasSize.h - this.playerSize.h
        }
        if (this.playerPos.y < 1) {
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
            if (e.code === 'ArrowUp') { this.image = this.imageUp }
            if (e.code === 'ArrowRight') { this.image = this.imageRight }
            if (e.code === 'ArrowLeft') { this.image = this.imageLeft }
            if (e.code === 'ArrowDown') { this.image = this.imageDown }

        })
    }



}
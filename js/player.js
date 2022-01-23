class Player {
    constructor(ctx, playerWidth, playerHeight, playerPosX, playerPosY, playerVelocity, keys) {
        this.ctx = ctx
        this.playerSize = { w: playerWidth, h: playerHeight }
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.keys = keys
        this.imageInstance = undefined
        this.playerVelocity = playerVelocity

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/german.jfif'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h,)

    }

    move() {
        document.addEventListener('keydown', e => {
            if (e.key === this.keys.W) {
                this.playerPos.y -= this.playerVelocity
            } else if (e.key === this.keys.S) {
                this.playerPos.y += this.playerVelocity
            } else if (e.key === this.keys.A) {
                this.playerPos.x -= this.playerVelocity
            }
            if (e.key === this.keys.D) {
                this.playerPos.x += this.playerVelocity
            }
        })


    }


}
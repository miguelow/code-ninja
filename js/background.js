class Background {
    constructor(ctx, backgroundWidth, backgroundHeight, backgroundSrc) {
        this.ctx = ctx
        this.backgroundSize = { w: backgroundWidth, h: backgroundHeight }
        this.image = new Image()
        this.image.src = backgroundSrc
        this.backgroundPos = { x: 0, y: 0 }
    }
    draw() {
        this.ctx.drawImage(this.image, this.backgroundPos.x, this.backgroundPos.y)
    }

}
class Background {
    constructor(ctx, backgroundWidth, backgroundHeight, backgroundSrc) {
        this.ctx = ctx
        this.backgroundSize = { w: backgroundWidth, h: backgroundHeight }
        this.image = new Image()
        this.image.src = backgroundSrc
        this.backgroundPos = { x: 0, y: 0 }
    }
    draw() {
        this.ctx.drawImage(this.image, 0, 0, this.backgroundSize.w, this.backgroundSize.h, this.backgroundPos.x, this.backgroundPos.y, this.backgroundSize.w, this.backgroundSize.h)
    }

}
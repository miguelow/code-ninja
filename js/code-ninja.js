const code_ninja = {
    authors: 'Miguel y Jean',
    version: '0.0.1',
    ctx: undefined,
    FPS: 60,
    framesCounter: 0,
    width: undefined,
    height: undefined,
    background: undefined,
    player: undefined,
    enemies: [],
    canvasDom: undefined,
    intervalID: undefined,
    canvasSize: { w: undefined, h: undefined },

    keys: {
        W: 'KeyW',
        A: 'KeyA',
        S: 'KeyS',
        D: 'KeyD',
        SPACE: 'Space'
    },


    init() {
        this.canvasDom = document.querySelector('#myCanvas')
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setEventHandlers()
        this.startGame()
    },

    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight * (4 / 5)
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },


    startGame() {
        this.setGame()
        this.intervalID = setInterval(() => {
            this.framesCounter > 3000 ? this.framesCounter = 0 : this.framesCounter++
            this.clearAll()
            this.drawAll()
        }, 1000 / this.FPS)
    },

    setGame() {
        this.player = new Player(this.ctx, 50, 50, this.canvasSize.w / 2, this.canvasSize.h / 2, 10, this.keys, '/imgs/computer.png')
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, '/imgs/backgroundtry.png')
        this.enemy = new Enemy()
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        this.background.draw()
        this.player.draw()


    },

    setEventHandlers() {
        document.addEventListener('keydown', e => {
            const { code } = e
            console.log(e)
            code === 'KeyW' ? this.player.moveUp() : null
            code === 'KeyA' ? this.player.moveLeft() : null
            code === 'KeyS' ? this.player.moveDown() : null
            code === 'KeyD' ? this.player.moveRight() : null

        })

    },









}
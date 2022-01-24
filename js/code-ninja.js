const code_ninja = {
    authors: 'Miguel y Jean',
    version: '0.0.1',
    ctx: undefined,
    FPS: 60,
    framesCounter: 0,
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
            this.framesCounter > 100 ? this.framesCounter = 0 : this.framesCounter++
            this.clearAll()
            
            if (this.framesCounter === 100) {
                
                this.createEnemy()
            }
            
            this.drawAll()
            
            this.enemies.forEach(elm => {
                elm.draw()
                elm.move(this.player.playerPos)
            })

        }, 1000 / this.FPS)
    },

    setGame() {
        this.player = new Player(this.ctx, 50, 50, this.canvasSize.w / 2, this.canvasSize.h / 2, 10, this.keys, '/imgs/computer.png')
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, '/imgs/backgroundtry.png')

    },

    createEnemy() {
        // this.enemies.push(this.enemy = new Enemy(this.ctx, 0, 0, 100, 100, 1))
        let screenSide = Math.floor(Math.random() * 4)

        if (screenSide === 0) {
            console.log("arriba")
            this.enemies.push(this.enemy = new Enemy(this.ctx, Math.floor(Math.random() * this.canvasSize.w), 0, 100, 100, 10, this.player.playerPos.x,this.player.playerPos.y))
        } else if (screenSide === 1) {
            console.log("derecha")
            this.enemies.push(this.enemy = new Enemy(this.ctx, this.canvasSize.w - 100, Math.floor(Math.random() * this.canvasSize.h), 100, 100, 10, this.player.playerPos.x,this.player.playerPos.y))
        } else if (screenSide === 2) {
            console.log("abajo")
            this.enemies.push(this.enemy = new Enemy(this.ctx, Math.floor(Math.random() * this.canvasSize.w), this.canvasSize.h - 100, 100, 100, 10, this.player.playerPos.x,this.player.playerPos.y))
        } else if (screenSide === 3) {
            console.log("izquierda")
            this.enemies.push(this.enemy = new Enemy(this.ctx, 0, Math.floor(Math.random() * this.canvasSize.h), 100, 100, 10, this.player.playerPos.x,this.player.playerPos.y))
        }
    },


    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        this.background.draw()
        this.player.draw()
        this.move()
    },

    setEventHandlers() {
        document.addEventListener('keydown', e => {
            const { code } = e
            this.player.move(code)
            e.key === 'w' && (this.up = true)
            e.key === 'd' && (this.right = true)
        })

        document.addEventListener('keyup', e => {
            const { code } = e
            this.player.move(code)
            e.key === 'w' && (this.up = false)
            e.key === 'd' && (this.right = false)

        })


    },

    move() {
        this.up && (this.player.playerPos.y -= 5)
        this.right && (this.player.playerPos.x += 5)

    }









}
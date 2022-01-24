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
    playerLives: 3,


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
            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
            this.clearAll()

            if (this.framesCounter % 400 === 0) {

                this.createEnemy()
            }

            this.drawAll()

            this.enemies.forEach(elm => {
                elm.move(this.player.playerPos)
                elm.draw()
                this.checkCollision(elm)
                document.addEventListener('keydown', e => {
                    const { code } = e
                    let input = document.querySelector('.inputBox').value
                    if (code === 'Enter') {
                        console.log(input)
                        input = ""

                    }


                })
            })

        }, 1000 / this.FPS)
    },

    setGame() {
        this.player = new Player(this.ctx, 50, 50, this.canvasSize.w / 2, this.canvasSize.h / 2, 10, this.keys, '/imgs/computer.png')
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, '/imgs/backgroundtry.png')

    },

    createEnemy() {
        let screenSide = Math.floor(Math.random() * 4)

        if (screenSide === 0) {
            this.enemies.push(this.enemy = new Enemy(this.ctx, Math.floor(Math.random() * this.canvasSize.w), 0, 60, 20, .7, this.player.playerPos.x, this.player.playerPos.y))
        } else if (screenSide === 1) {
            this.enemies.push(this.enemy = new Enemy(this.ctx, this.canvasSize.w - 60, Math.floor(Math.random() * this.canvasSize.h), 60, 20, .7, this.player.playerPos.x, this.player.playerPos.y))
        } else if (screenSide === 2) {
            this.enemies.push(this.enemy = new Enemy(this.ctx, Math.floor(Math.random() * this.canvasSize.w), this.canvasSize.h - 20, 60, 20, .7, this.player.playerPos.x, this.player.playerPos.y))
        } else if (screenSide === 3) {
            this.enemies.push(this.enemy = new Enemy(this.ctx, 0, Math.floor(Math.random() * this.canvasSize.h), 60, 20, .7, this.player.playerPos.x, this.player.playerPos.y))
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
            e.key === 'a' && (this.left = true)
            e.key === 's' && (this.down = true)
        })

        document.addEventListener('keyup', e => {
            const { code } = e
            this.player.move(code)
            e.key === 'w' && (this.up = false)
            e.key === 'd' && (this.right = false)
            e.key === 'a' && (this.left = false)
            e.key === 's' && (this.down = false)
        })

    },


    move() {
        this.up && (this.player.playerPos.y -= 2)
        this.right && (this.player.playerPos.x += 2)
        this.down && (this.player.playerPos.y += 2)
        this.left && (this.player.playerPos.x -= 2)
    },

    checkCollision(elm) {

        if (elm.enemyPos.x < this.player.playerPos.x + this.player.playerSize.w &&
            elm.enemyPos.x + elm.enemySize.w > this.player.playerPos.x &&
            elm.enemyPos.y < this.player.playerPos.y + this.player.playerSize.h &&
            elm.enemySize.h + elm.enemyPos.y > this.player.playerPos.y) {

            this.playerLives--
            let indexEnemy = this.enemies.indexOf(elm)
            if (indexEnemy != -1) this.enemies.splice(indexEnemy, 1)

            if (this.playerLives === 0) {
                alert("You lost")
                this.clearIntervalId()
            }

            while (playerPos.x > 0 && playerPos.x < this.canvasSize.w) {
                this.move
            }
        }
    },

    clearIntervalId() {
        clearInterval(this.intervalID)
    },

    compareWords(elm) {


    }








}
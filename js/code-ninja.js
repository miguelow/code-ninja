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
    powerUpCounter: 0,
    powerUpTimer: 0,
    powerUpTimerVerify: false,
    powerUp: undefined,
    measuredtext: undefined,
    wordsEliminated: 0,
    enemySpeed: .4,
    init() {
        this.input = document.querySelector('.inputBox')
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
            this.framesCounter > 6000 ? this.framesCounter = 0 : this.framesCounter++
            this.clearAll()

            this.powerUpCounter++

            if (this.framesCounter % 250 === 0) {
                this.createEnemy()
            }

            if (this.powerUpCounter % 1000 === 0) {
                this.createPowerUp()
            }

            this.drawAll()

            if (this.powerUp) {
                this.powerUp.drawPowerUp()
                this.powerUp.animate(this.framesCounter)

            }
            if (this.powerUpCounter % 1500 === 0) {
                this.powerUp = undefined
                this.powerUpCounter = 0
            }

            //CUANDO COJAS EL POWERUP EMPIEZA EL CONTADOR Y DURA 500 FRMES, DESPUES LO RESETEA Y VUELVE A FALSE
            if (this.powerUpTimer === 500) {
                this.powerUpTimerVerify = false
                this.powerUpTimer = 0

            }

            this.powerUpTimerVerify ? this.powerUpTimer++ : null


            this.enemies.forEach(elm => {
                elm.move(this.player.playerPos)
                elm.draw()
                this.calculateWordWidth(elm)
                this.checkCollision(elm)
                if (this.powerUpTimer > 490) {
                    elm.enemyVelocity = 0.4
                }
            })
            this.wordsCounter()
            this.livesCounter()
        }, 1000 / this.FPS)
    },

    setGame() {
        this.player = new Player(this.ctx, 30, 30, (this.canvasSize.w / 2) - 15, (this.canvasSize.h / 2) - 15, 10, this.canvasSize)
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, '/imgs/Space Background.png')
        const gameAudio = new Audio('/audio/Balloon.mp3');
        gameAudio.play();
    },

    createEnemy() {
        let screenSide = Math.floor(Math.random() * 4)

        if (screenSide === 0) {
            this.enemies.push(this.enemy = new Enemy(this.ctx, Math.floor(Math.random() * this.canvasSize.w), 0, 20, this.enemySpeed, this.player.playerPos.x, this.player.playerPos.y, this.canvasSize.w, this.canvasSize.h))
        } else if (screenSide === 1) {
            this.enemies.push(this.enemy = new Enemy(this.ctx, this.canvasSize.w - 60, Math.floor(Math.random() * this.canvasSize.h), 20, this.enemySpeed, this.player.playerPos.x, this.player.playerPos.y, this.canvasSize.w, this.canvasSize.h))
        } else if (screenSide === 2) {
            this.enemies.push(this.enemy = new Enemy(this.ctx, Math.floor(Math.random() * this.canvasSize.w), this.canvasSize.h - 20, 20, this.enemySpeed, this.player.playerPos.x, this.player.playerPos.y, this.canvasSize.w, this.canvasSize.h))
        } else if (screenSide === 3) {
            this.enemies.push(this.enemy = new Enemy(this.ctx, 0, Math.floor(Math.random() * this.canvasSize.h), 20, this.enemySpeed, this.player.playerPos.x, this.player.playerPos.y, this.canvasSize.w, this.canvasSize.h))
        }
    },


    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        this.background.draw()
        this.player.draw(this.framesCounter)
        this.move()

    },

    setEventHandlers() {
        document.addEventListener('keydown', e => {
            const { code } = e
            e.key === 'ArrowUp' && (this.up = true)
            e.key === 'ArrowRight' && (this.right = true)
            e.key === 'ArrowLeft' && (this.left = true)
            e.key === 'ArrowDown' && (this.down = true)
        })

        document.addEventListener('keyup', e => {
            const { code } = e
            e.key === 'ArrowUp' && (this.up = false)
            e.key === 'ArrowRight' && (this.right = false)
            e.key === 'ArrowLeft' && (this.left = false)
            e.key === 'ArrowDown' && (this.down = false)
        })


        this.input.addEventListener('keydown', e => {
            if (e.code === 'Enter') {
                this.checkIfEqual(this.input.value)
                this.input.value = ""
            }
        })
    },

    move() {
        this.up && (this.player.playerPos.y -= 6)
        this.right && (this.player.playerPos.x += 6)
        this.down && (this.player.playerPos.y += 6)
        this.left && (this.player.playerPos.x -= 6)
    },

    checkCollision(elm) {

        if (elm.enemyPos.x < this.player.playerPos.x + this.player.playerSize.w &&
            elm.enemyPos.x + this.measuredtext.width > this.player.playerPos.x &&
            elm.enemyPos.y < this.player.playerPos.y + this.player.playerSize.h &&
            elm.enemySize.h + elm.enemyPos.y > this.player.playerPos.y) {
            this.playerLives--
            let indexEnemy = this.enemies.indexOf(elm)
            if (indexEnemy != -1) this.enemies.splice(indexEnemy, 1)

            if (this.playerLives === 0) {


                this.clearAll()
                this.clearIntervalId()
                this.gameOver()
            }
        }

        // powerUpCollision
        if (this.powerUp !== undefined) {
            if (this.powerUp.powerUpPos.x < this.player.playerPos.x + this.player.playerSize.w &&
                this.powerUp.powerUpPos.x + this.powerUp.powerUpSize.w > this.player.playerPos.x &&
                this.powerUp.powerUpPos.y < this.player.playerPos.y + this.player.playerSize.h &&
                this.powerUp.powerUpSize.h + this.powerUp.powerUpPos.y > this.player.playerPos.y) {
                //EMPIEZA EL CONTADOR

                this.startPowerUpTimer()
                this.enemies = this.powerUp.activateBooster(this.player.playerPos, this.enemies)
                //POWERUP DESPARECE EN CASO DE COLISION
                this.powerUp = undefined
            }
        }

    },

    clearIntervalId() {
        clearInterval(this.intervalID)
    },

    checkIfEqual(playerText) {
        this.enemies.forEach(e => {
            if (playerText.toLowerCase() === (htmlWords[e.RandomWordNumber]).toLowerCase()) {
                let comparedEnemy = this.enemies.indexOf(e)
                if (comparedEnemy != -1) this.enemies.splice(comparedEnemy, 1)
                this.wordsEliminated++

            }
        })
    },

    createPowerUp() {

        let choosePowerUp = Math.floor(Math.random() * 3)


        if (choosePowerUp === 0) {
            this.powerUp = new PowerUpIce(this.ctx, Math.floor(Math.random() * this.canvasSize.w),
                Math.floor(Math.random() * this.canvasSize.h), '/imgs/blueSlime.png', this.powerUpTimer, this.enemies)

        }
        if (choosePowerUp === 1) {
            this.powerUp = new PowerUpBomb(this.ctx, Math.floor(Math.random() * this.canvasSize.w),
                Math.floor(Math.random() * this.canvasSize.h), '/imgs/redSlime.png', this.powerUpTimer, this.player.playerPos.x, this.player.playerPos.y, this.enemies)
        }
        if (choosePowerUp === 2) {
            this.powerUp = new PowerUpGravity(this.ctx, Math.floor(Math.random() * this.canvasSize.w),
                Math.floor(Math.random() * this.canvasSize.h), '/imgs/greenSlime.png', this.powerUpTimer, (-0.4))
        }
    },

    //METODOS RELACIONADOS FREEZE
    startPowerUpTimer() {
        this.powerUpTimer = 0
        this.powerUpTimerVerify = true
    },


    calculateWordWidth(elm) {
        this.measuredtext = this.ctx.measureText(htmlWords[elm.RandomWordNumber])
    },

    wordsCounter() {
        const score = document.querySelector('.score')
        score.innerText = `Score:${this.wordsEliminated}`
    },

    livesCounter() {
        const livesleft = document.querySelector('.livesleft')
        livesleft.innerText = `Lives left:${this.playerLives}`
    },

    gameOver() {
        const footer = document.querySelector('footer')
        const gameOverScreen = document.querySelector('#gameover')
        const main = document.querySelector('main')

        footer.classList.add('d-none')
        main.classList.add('d-none')
        gameOverScreen.classList.remove('d-none')
        this.canvasDom.classList.add('d-none')


    }
}
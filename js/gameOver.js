const footer = document.querySelector('footer')
const gameOverScreen = document.querySelector('gameOverScreen')
const main = document.querySelector('main')

showGameOverScreen(){
    this.main.classList.add("d-none")
    this.footer.classList.add("d-none")
    this.gameOverScreen.classList.remove("d-none")
}
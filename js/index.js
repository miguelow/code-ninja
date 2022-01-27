const startButton = document.getElementById('start-button');
const starterScreen = document.getElementById("starting-screen");
const footer = document.querySelector('footer')
const gameOverScreen = document.querySelector('gameOverScreen')
const main = document.querySelector('main')


startButton.addEventListener('click', () => {
    footer.classList.remove('d-none')
    starterScreen.classList.add("d-none")
    code_ninja.init()

})

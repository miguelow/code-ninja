
window.onload = () => {

    const startButton = document.getElementById('start-button');
    const starterScreen = document.getElementById("starting-screen");
    const showgame = document.querySelector('#showgame')
    const footer = document.querySelector('footer')



    startButton.addEventListener('click', () => {
        showgame.classList.remove('d-none')
        footer.classList.remove('d-none')
        starterScreen.classList.add("d-none")
        code_ninja.init()

    })
    const resetButton = document.querySelector('.tryAgainButton')

    resetButton.addEventListener('click', elm => {
        window.location.reload(elm);
    })
}

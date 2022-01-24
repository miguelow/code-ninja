// GET PLAY BUTTON, MAIN SCREEN AND USER INPUT
const startButton = document.getElementById('start-button');
const starterScreen = document.getElementById("starting-screen");



startButton.addEventListener('click', () => {
    console.log(starterScreen)
    starterScreen.classList.add("d-none");
    code_ninja.init()

})

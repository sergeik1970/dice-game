const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", function () {

    let randomNumber1 = Math.floor(Math.random() * 6 + 1)
    let randomNumber2 = Math.floor(Math.random() * 6 + 1)

    let src1 = `images/dice${randomNumber1}.png`
    let src2 = `images/dice${randomNumber2}.png`

    document.querySelector(".img1").src = src1
    document.querySelector(".img2").src = src2

    // if (randomNumber1 > randomNumber2) {
    //     document.querySelector("h1").innerText = "Player 1 Wins!"
    //     console.log("Выйграл первый игрок!")
    // }

    // else if (randomNumber2 > randomNumber1) {
    //     document.querySelector("h1").innerText = "Player 2 Wins!"
    //     console.log("Выйграл второй игрок!")
    // }

    // else {
    //     document.querySelector("h1").innerText = "Draw!"
    //     console.log("Ничья!")
    // }

    let result;


    if (randomNumber1 > randomNumber2) {
        result = "🚩 Player 1 Wins!";
    }

    else if (randomNumber2 > randomNumber1) {
        result = "Player 2 Wins! 🚩";
    }

    else {
        result = "Draw!";
    }

    document.querySelector("h1").innerText = result;
})
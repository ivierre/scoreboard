let scoreHome = document.getElementById("score-home")
let currentScoreHome = 0

function homePlusOne() {
    currentScoreHome += 1
    scoreHome.innerText = currentScoreHome
}
function homePlusTwo() {
    currentScoreHome += 2
    scoreHome.innerText = currentScoreHome
}
function homePlusThree() {
    currentScoreHome += 3
    scoreHome.innerText = currentScoreHome
}

let scoreGuest = document.getElementById("score-guest")
let currentScoreGuest = 0

function guestPlusOne() {
    currentScoreGuest += 1
    scoreGuest.innerText = currentScoreGuest
}
function guestPlusTwo() {
    currentScoreGuest += 2
    scoreGuest.innerText = currentScoreGuest
}
function guestPlusThree() {
    currentScoreGuest += 3
    scoreGuest.innerText = currentScoreGuest
}
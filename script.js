let xSpeed = 4
let ySpeed = 8
const xAccelaration = 0.013
const yAccelaration = 0.05182
const rippleRate = 12 // lower means more frequent

let ballPos = {x:0, y:0}
const ball = document.getElementById('ball')
const main = document.getElementById("main")
let createRipple = 0


begin();

function begin () {
    setInterval(()=>{
        moveBall()
        setPos(ball)
        if (createRipple === 0){
            createTempDiv('ripple-1')
            createTempDiv('ripple-2')
            createTempDiv('ripple-3')
            createTempDiv('ripple-4')
            createRipple = rippleRate
        }
        createRipple --
    },60)
} 

function moveBall() {
    xSpeed -= ballPos.x * xAccelaration
    ballPos.x += xSpeed
    ySpeed -= ballPos.y * yAccelaration
    ballPos.y += ySpeed
}

function setPos(div) {
    div.style.cssText = `
            left: ${ballPos.x + 50}%;
            top: ${ballPos.y + 50}%;
        `
}

function createTempDiv(divType) {
    const extraBall = document.createElement('div')
    setPos(extraBall)
    setTimeout(() => {
        main.appendChild(extraBall)
        setTimeout(() => {
            extraBall.classList.add(divType)
        },10)
        setTimeout(() => {
            main.removeChild(extraBall);
        },1600)
    }, 63)
}
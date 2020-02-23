let ballPos = {
    x:0,
    y:0
}

const ball = document.getElementById('ball')
const main = document.getElementById("main")

let createRipple = true

begin()

function begin () {
    setInterval(()=>{
        calculateBallPos()
        setBallPos(ball)
        if (createRipple){
            createTempBall('ball1')
            createTempBall('ball2')
            createTempBall('ball3')
            createTempBall('ball4')
        }
        createRipple = !createRipple
    },200)
} 

function setBallPos(div) {
    div.style.cssText = `
            left: ${ballPos.x + 50}%;
            top: ${ballPos.y + 50}%;
        `
}

let xSpeed = 10
let ySpeed = 15

function calculateBallPos() {
    xSpeed -= ballPos.x/12
    ballPos.x += xSpeed
    ySpeed -= ballPos.y/3.06
    ballPos.y += ySpeed
}

function createTempBall(ballType) {
    const extraBall = document.createElement('div')
    setBallPos(extraBall)
    setTimeout(() => {
        main.appendChild(extraBall)
        setTimeout(() => {
            extraBall.classList.add(ballType)
        },10)
        setTimeout(() => {
            main.removeChild(extraBall);
        },1600)
    }, 220)
}



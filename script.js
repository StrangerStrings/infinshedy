let ballPos = {
    x:0,
    y:0
}

const ball = document.getElementById('ball')
const main = document.getElementById("main")

begin()

function begin () {
    setInterval(()=>{
        calculateBallPosX()
        calculateBallPosY()
        setBallPos(ball)
        createTempBall('ball1')
        createTempBall('ball2')
        createTempBall('ball3')
        createTempBall('ball4')
    },200)
} 

function setBallPos(div) {
    div.style.cssText = `
            left: ${ballPos.x + 50}%;
            top: ${ballPos.y + 50}%;
        `
}

let xSpeed = 20
let ySpeed = 30

function calculateBallPosX() {
    xSpeed -= ballPos.x/5
    ballPos.x += xSpeed
}
function calculateBallPosY() {
    ySpeed -= ballPos.y/1.315
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
        },1000)
    }, 200)
}



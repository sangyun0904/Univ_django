const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 768
canvas.height = 432

var img_cnt = 0

const image = new Image()
image.src = '/static/img/map.png'

const playerImage = new Image()
playerImage.src = '/static/img/down.png'

image.onload = () => {
    img_cnt++
    tryDraw()
}

playerImage.onload = () => {
    img_cnt++
    tryDraw()
}

function tryDraw()
{
    if (img_cnt == 2)
    {
        c.drawImage(image, -110, -230)
        c.drawImage(
            playerImage,
            0,
            0,
            playerImage.width / 4,
            playerImage.height,
            canvas.width / 2 - playerImage.width / 4,
            canvas.height / 2 - playerImage.height / 4,
            playerImage.width / 4,
            playerImage.height
        )
    }
}

window.addEventListener('keydown', () => {
    console.log("keydown")
})
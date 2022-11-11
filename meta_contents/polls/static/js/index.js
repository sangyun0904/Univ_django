const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 768
canvas.height = 432

const image = new Image()
image.src = '/static/img/map.png'

const playerImage = new Image()
playerImage.src = '/static/img/playerDown.png'

image.onload = () => {
    c.drawImage(image, -110, -230)
    c.drawImage(playerImage, canvas.width / 2, canvas.height / 2)
}

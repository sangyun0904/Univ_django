const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 768
canvas.height = 432

const image = new Image()
image.src = '/static/img/map.png'

image.onload = () => {
    c.drawImage(image, -110, -230)
}
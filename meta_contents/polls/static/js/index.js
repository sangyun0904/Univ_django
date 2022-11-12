const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 768
canvas.height = 432

const image = new Image()
image.src = '/static/img/map.png'

const playerImage = new Image()
playerImage.src = '/static/img/down.png'

class Sprite {
    constructor({ position, velocity, image }) {
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, -110, -230)
    }
}

const background = new Sprite({
    position: {
        x: -110,
        y: -230
    },
    image: image
})

function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
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
animate()

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            console.log('up')
            break
        case 'ArrowDown':
            console.log('down')
            break
        case 'ArrowLeft':
            console.log('left')
            break
        case 'ArrowRight':
            console.log('right')
            break
    }
})
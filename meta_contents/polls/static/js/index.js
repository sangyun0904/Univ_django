const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

console.log(collisions)

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
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite({
    position: {
        x: -110,
        y: -230
    },
    image: image
})

const keys = {
    up: {
        pressed: false
    },
    down: {
        pressed: false
    },
    left: {
        pressed: false
    },
    right: {
        pressed: false
    }
}

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

    if (keys.up.pressed && lastKey == 'ArrowUp') background.position.y += 3
    else if (keys.left.pressed && lastKey == 'ArrowLeft') background.position.x += 3
    else if (keys.right.pressed && lastKey == 'ArrowRight') background.position.x -= 3
    else if (keys.down.pressed && lastKey == 'ArrowDown') background.position.y -= 3
}
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            keys.up.pressed = true
            lastKey = 'ArrowUp'
            break
        case 'ArrowDown':
            keys.down.pressed = true
            lastKey = 'ArrowDown'
            break
        case 'ArrowLeft':
            keys.left.pressed = true
            lastKey = 'ArrowLeft'
            break
        case 'ArrowRight':
            keys.right.pressed = true
            lastKey = 'ArrowRight'
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            keys.up.pressed = false
            break
        case 'ArrowDown':
            keys.down.pressed = false
            break
        case 'ArrowLeft':
            keys.left.pressed = false
            break
        case 'ArrowRight':
            keys.right.pressed = false
            break
    }
})
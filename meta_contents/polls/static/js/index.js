const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 768
canvas.height = 432

const collisionMap = []
for (let i = 0; i < collisions.length; i += 50) {
    collisionMap.push(collisions.slice(i, i+50))
}

class Boundary {
    static width = 24
    static height = 24
    constructor({ position }) {
        this.position = position
        this.width = 24
        this.height = 24
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const boundaries = []
const offset = {
    x: -110,
    y: -230
}

collisionMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 131)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

console.log(boundaries)

const image = new Image()
image.src = '/static/img/map.png'

const playerImage = new Image()
playerImage.src = '/static/img/down.png'

class Sprite {
    constructor({ position, velocity, image, frames = { max:1 } }) {
        this.position = position
        this.image = image
        this.frames = frames
    }

    draw() {
        c.drawImage(
            this.image,
            0,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
        )
    }
}

const player = new Sprite({
    position: {
        x: canvas.width / 2 - 96 / 4,  // hard to put variable for width and height so put static value
        y: canvas.height / 2 - 34 / 4,
    },
    image: playerImage,
    frames: { max:4 }
})

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
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

const movables = [background]
function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    player.draw()
    boundaries.forEach(boundary => {
        boundary.draw()
    })

    if (keys.up.pressed && lastKey == 'ArrowUp') {
        movables.forEach((movable) => {
            movable.position.y += 3
        })
    }
    else if (keys.left.pressed && lastKey == 'ArrowLeft') {
        movables.forEach((movable) => {
            movable.position.x += 3
        })
    }
    else if (keys.right.pressed && lastKey == 'ArrowRight') {
        movables.forEach((movable) => {
            movable.position.x -= 3
        })
    }
    else if (keys.down.pressed && lastKey == 'ArrowDown') {
        movables.forEach((movable) => {
            movable.position.y -= 3
        })
    }
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

//chat socket
const roomName = JSON.parse(document.getElementById('room-name').textContent);

const chatSocket = new WebSocket(
    'ws://'
    + window.location.host
    + '/ws/polls/'
    + roomName
    + '/'
);

chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    document.querySelector("#id_chat_item_container").value += (data.message + '\n');
};

chatSocket.onclose = function(e) {
    console.error('Chat socket closed unexpectedly');
};

document.querySelector("#id_message_send_input").focus();
document.querySelector("#id_message_send_input").onkeyup = function(e) {
    if (e.keyCode == 13) { // enter, return
        document.querySelector("#id_message_send_button").click();
    }
};

document.querySelector("#id_message_send_button").onclick = function(e) {
    const messgaeInputDom = document.querySelector("#id_message_send_input");
    const message = messgaeInputDom.value;
    chatSocket.send(JSON.stringify({
        'message': message
    }));
    messgaeInputDom.value = '';
}
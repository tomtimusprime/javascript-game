const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');//this will give us access to built in canvas methods
canvas.width = 800;
canvas.height = 500;
const keys = []; //use this to keep track of what keys are being pressed on the keyboard
// ctx.font="20px Times Roman";
// ctx.fillText("Hello World!",50,100);
const player = {
    x:250,
    y:250,
    width: 40, //this is how wide the image is divided by number of columns (160/4)
    height: 72, //this is how tall the image is divided by number of rows (288/4)
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
}

const playerSprite = new Image();
playerSprite.src = './images/chewie.png'

const background = new Image();
background.src = "./images/background.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY,
         player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    requestAnimationFrame(animate);
}
animate();

//key press
window.addEventListener('keydown', (e) => {
    keys[e.keyCode] = true; //this is just another way to add an item to an array
});

//key unpress
window.addEventListener('keyup', (e) => {
    delete keys[e.keyCode];
});

function movePlayer(){
    if(keys[38] && player.y > 50){ //38 is the code for the up arrow
        player.y -= player.speed;
        player.frameY = 3;
    }
    if(keys[37] && player.x > 0){
        player.x -= player.speed;
        player.frameY = 1;
    }
    if(keys[40] && player.y < 450) {
        player.y += player.speed;
        player.frameY = 0;
    }
    if(keys[39] && player.x < 765){
        player.x += player.speed;
        player.frameY = 2;
    }
}
// Create an object containing animated character data
const characterDataDolly = {
    arrImgs: ["Dolly4.png", "Dolly5.png", "Dolly6.png", "Dolly7.png"],
    poseNumber: 0,
    elem: document.querySelector("#dolly"),
    screenWidth: document.querySelector("#stage").clientWidth,
    screenHeight: document.querySelector("#stage").scrollHeight,
    x: document.querySelector("#stage").clientWidth - 150,
    y: 0,
    timerId: null,
    moving: false,

    move : function() {
        if (this.y > this.screenHeight - 200) {
            this.x = this.screenWidth - 150;
            this.y = 0;
        } else {
            this.x -= 5;
            this.y += 5;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "dollyImages\\" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 4;
        }
    }

}

// Create an object containing animated character data
const characterDataOzzy = {
    arrImgs: ["Ozzy1.png", "Ozzy2.png", "Ozzy3.png", "Ozzy4.png", "Ozzy5.png", "Ozzy6.png"],
    poseNumber: 0,
    elem: document.querySelector("#ozzy"),
    screenWidth: document.querySelector("#stage").clientWidth,
    screenHeight: document.querySelector("#stage").scrollHeight,
    x: document.querySelector("#stage").clientWidth - 150,
    y: document.querySelector("#stage").scrollHeight - 255,
    timerId: null,
    moving: false,

    move : function() {
        if (this.x < 0) {
            characterDataOzzy.x = this.screenWidth - 150;
            characterDataOzzy.y = this.screenHeight - 255;
        } else {
            this.x -= 5;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "ozzyImages\\" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 6;
        }
    }

}

/* You can add more characters and process the animation with an array */
const characters = [characterDataDolly, characterDataOzzy];

// Function called when the move it button is clicked
function move() {
    characters.forEach((characterData) => {
        if(!characterData.moving)
        {
            characterData.timerId = setInterval(frame, 100);
            characterData.moving = true;
        }
    }
    )
}

// Callback function to reset the image position
function frame() {
    characters.forEach((characterData) => {
        characterData.move()
    }
    )
}

// Function called when the stop button is clicked
function stopMoving() {
    characters.forEach((characterData) => {
        clearInterval(characterData.timerId);
        characterData.moving = false;
    }
    )
}

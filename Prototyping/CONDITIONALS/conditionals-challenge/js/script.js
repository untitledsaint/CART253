/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const target = {
    x: 300,
    y: 300,
    size: 150,
    fill: "#0000ff",
    fills: {
        noOverlap: "#0000ff",
        overlap: "#00ff00"
    }
};

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};


const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  movePuck();
  moveUser();
  checkTarget();
  
  // Draw the user and puck
  drawTarget();
  drawPuck();
  drawUser();

}


/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

function movePuck() {
    const d = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (d < user.size / 2 + puck.size / 2);
    if (overlap) {

    if(user.x < puck.x){
puck.x += 1;


    }
    if(user.x > puck.x){
        puck.x -= 1;
    }
    if(user.y < puck.y){
        puck.y += 1;
    }
    if(user.y > puck.y){
        puck.y -= 1;
    }
    }
}

function checkTarget(){
    const d = dist(puck.x, puck.y, target.x, target.y);
    const overlap = (d < puck.size / 2 + target.size / 2);
    if (overlap) {
        target.fill = target.fills.overlap;
    } else {
        target.fill = target.fills.noOverlap;
    }
}

function drawTarget(){
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}
    

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}
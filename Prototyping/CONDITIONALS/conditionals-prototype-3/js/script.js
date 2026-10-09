/**
 * Containment breach
 * antonyhatem
 * 
 * This prototype will be mold spreading out of a lab. The mold will move and spread across the screen.
 */

"use strict";

let backgroundImage;
let moldX = 300;
let moldY = 200;

//mold movement speed
let speedX = 2;
let speedY =1; 

/**
 * makes the canvas
*/
function setup() {
    createCanvas(600, 600)
}


/**
 * makes background and some mold
*/
function draw() {
    background(200)

// draws mold 
fill(51, 51, 0);
noStroke();
ellipse(moldX, moldY, 30, 30);

//if mold leaves canvas it will be brought back randomly
if (moldX < 0 || moldX > width ||
    moldY < 0 || moldY > height) {
        moldX = random(width);
        moldY = random(height);
    }

//moves mold from its position
moldX = moldX + speedX;
moldY = moldY + speedY;

}

   
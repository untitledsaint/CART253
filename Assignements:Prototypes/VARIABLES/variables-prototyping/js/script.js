/**
 * Rebecca's rocket (temp)
 * antonyhatem
 * 
 * purple rocket launching downwards by following pippin's 
 * mini tutorial in class
 */

"use strict";

/**
 * making a rocket launch downward
 */
const rocket = {
    x:50, 
    y:0,
    width:50,
    height:100,
    speed: 3,
    acceleration: 0.5
}

/**
 * Making a canvas
 */
function setup() {
createCanvas(100, 800);

}


/**
 * Making rocket launch downward with acceleration
 */
function draw() {
    background("skyblue");

rocket.y += rocket.speed;
rocket.speed += rocket.acceleration;
/**
 * Drawing the rocket
 */
    push();
rectMode(CENTER);
noStroke();
fill("rebeccapurple");
square(rocket.x, rocket.y + rocket.height * 0.5, rocket.width);
pop();
}
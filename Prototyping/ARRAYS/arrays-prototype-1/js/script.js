/**
 * Title of Project
 * antonyhatem
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
// stores circle movements
let angle = 0;
let distance = 0;

/**
 * makes canvas
*/
function setup() {
    createCanvas(1000, 1000);

}


/**
 * draws background, circle and updates of the circle
*/
function draw() {
    background(25);

    //makes it so that circle turns and moves farther from middle
    angle += 0.01;
    distance += 0.5;
    
    // angle and distance to track circle position
    let x = 500 + cos(angle) * distance;
    let y = 500 + sin(angle) * distance;

    //draws circle
    fill(255);
    ellipse(x, y, 10);

}
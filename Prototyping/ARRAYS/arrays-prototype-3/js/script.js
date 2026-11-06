/**
 * Ripple Ripple Ripple
 * antonyhatem
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let ripple = 0;
/**
 * makes canvas
*/
function setup() {
    createCanvas(1000, 1000);
}


/**
 * draws everything
*/
function draw() {
    background(0);

    ripple += 3;

    noFill();
    stroke(150, 200, 255);
    strokeWeight(3);
    ellipse(500, 500, ripple);
}

function mousePressed() {
    ripple = 0;
}
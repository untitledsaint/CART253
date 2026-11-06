/**
 * Ripple Ripple Ripple
 * antonyhatem
 * 
 * third prototype is straightfoward, water ripples! whereever you click on your screen, a ripple will appear.
 */

"use strict";
//stores ripples in array
let ripples = [];


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
    background(50, 100, 200);
// updates, draws ripples from array
    for (let ripple of ripples) {
//what makes the ripple expand
    ripple.size += 3;
// draws the circle (ripple in this case)
    noFill();
    stroke(150, 200, 255);
    strokeWeight(3);
    ellipse(ripple.x, ripple.y, ripple.size);
}
    }

    
// when you click is resets the ripple
function mousePressed() {
    let ripple = {
        x: mouseX,
        y: mouseY,
        size: 0
    };
    //pushes ripples from array after a click
    ripples.push(ripple);
}
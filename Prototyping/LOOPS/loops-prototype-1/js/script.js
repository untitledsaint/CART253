/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    randomSeed(1);
    let y = height / 2;
    let step = 40;
    for (let x = 0; x <= width; x += step) {
        for (let y = 0; y <= width; y += step) {
            for (let z = 0; z <= width; z += step) {
        push();
        translate(x, y);
        noStroke();
        rotate(frameCount * 2 / x);
        colorMode(HSB);
        const saturation = map(x, 0, width, 70, 200);
        fill(250, saturation, 100);
        rectMode(CENTER);
        ellipse(10, 10, 0.6, 333);
        pop();
    }
}
    }
    
    
}
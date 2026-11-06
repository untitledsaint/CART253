/**
 * Title of Project
 * antonyhatem
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//array to store all dialogues
let dialogues = [
    "hello",
    "hi",
    "hey"
];
//tracks the current dialogue displayed
let currentDialogue = 0;
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


    /**
 * ALL CODE BELOW IS HEAVILY HEAVILY INSPIRED FROM PIPPIN BARR'S IN CLASS DEMONSTRATION OF LOOPS. 
 *--------------------------------------------------------------------------------------------------
*/
    randomSeed(1);
    let y = height / 2;
    let step = 40;

    //makes grids of lines (that are circles in my case) consistent all over the canvas
    //loop in a loop of a loop in x, y and z axis.
    for (let x = 0; x <= width; x += step) {
        for (let y = 0; y <= width; y += step) {
            for (let z = 0; z <= width; z += step) {
                push();
                //moves inital drawing position coordinates
                translate(x,y);
                noStroke();
                //rotate shape speed 
                rotate(frameCount * 1 / 100);
                //hue saturation and brightness for colors
                colorMode(HSB);
                //changes saturation depending on position, in this case i made it the same color across
                const saturation = map(x, 0, width, 70, 200);
                fill(250, saturation, 100);
                //very thin and stretched circle, which is basically the lines you see
                ellipse(10, 30, 0.6, 333);
                pop();
        }
    }   
}
 /**
 * ALL CODE ABOVE IS HEAVILY HEAVILY INSPIRED  FROM PIPPIN BARR'S IN CLASS DEMONSTRATION OF LOOPS. 
 --------------------------------------------------------------------------------------------------
*/

//draws textbox
colorMode(RGB);
fill(0, 180);
stroke(255);
strokeWeight(3);
rectMode(CENTER);
rect(500, 500, 700, 200);

noStroke();
fill(255);
textSize(28);
textAlign(CENTER, CENTER);
text(dialogues[currentDialogue], 500, 500)






    }
/**
 * would you kindly?
 * antonyhatem
 * 
 * Made a dialogue box containing documented CIA MKUltra hypnosis sentences and trippy visuals to put you in the mood. Each time you advance the dialogue, the colours change too.
 */

"use strict";

//array to store all dialogues
let dialogues = [
    "Your mind is completely relaxed, and you can only hear the sound of my voice.",
    "You feel a deep sense of guilt for your past actions, and the only way to relieve it is to cooperate fully.",
    "Every word i say becomes your own thoughts; you will obey because it is your own will.",
    "You have no choice but to rely on me, your old life is gone, and no one is coming to look for you.",
    "You will forget everything that happened earlier until I give you the signal. Would you kindly?"
];
//tracks the current dialogue displayed
let currentDialogue = 0;

let backgroundColours = [250, 180, 50, 320, 120];
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

                //changes background colour based on the dialogue.
                fill(backgroundColours[currentDialogue], saturation, 100);

                
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
textSize(15);
textAlign(CENTER, CENTER);
text(dialogues[currentDialogue], 500, 500);

}
//advances dialogue after clicking
function mousePressed() {
    currentDialogue++;

    //when dialogue is exhausted, it returns to the first one of the array.
    if (currentDialogue >= dialogues.length) {
        currentDialogue = 0;
    }
}




    
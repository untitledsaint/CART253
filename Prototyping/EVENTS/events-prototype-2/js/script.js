/**
 * paint splatter
 * antonyhatem
 * 
 * this second prototype will be quite messy. your cursor will keep leaving words on the canvas and by clicking it will change colors! 
 */


"use strict";

//word that fill be following cursor
let word = "YOU CANT STOP ME";

//stores words left on screen(supposedly)
let words = [];
//word color
let wordcolor;
/**
 * makes canvas 
*/

function setup() {
    createCanvas(windowHeight, windowWidth);

wordColor = color(255);

    textSize(30);
    textAlign(CENTER, CENTER);
}


/**
 * makes background 
*/
function draw() {
background(25);

fill(wordColor);
text(word, mouseX, mouseY);






}
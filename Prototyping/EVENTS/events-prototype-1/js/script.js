/**
 * Preacher
 * antonyhatem
 * 
 * This first prototype is about someone who wants people to hear his song! 
 * Simply put when the volume is off you dont hear the music and the preacher is sad. When it is on, you hear the music and let the preacher preach the greatness of aphex twin.
 */

"use strict";
let music;
let volume = 0;

function preload(){
    //loads music
music = loadSound("aphextwin3.mp3")
}

/**
 *setting up the canvas
*/
function setup() {
createCanvas(600, 600)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(0);

if (volume == 0){
    fill(255);
    textSize(25);
    text("I AM SAD. NO SOUL TO HEAR ME PREACH", 300, 130);

}
else {
    fill(255, 220, 100);
    textSize(25);
    text("HEAR YE, LET THE CHOIR SING ITS SONG", 300, 130);
}
}
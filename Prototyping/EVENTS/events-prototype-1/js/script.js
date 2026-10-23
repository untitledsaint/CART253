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
 *background
*/
function draw() {
background(0);
// if volume is zero it shows this message
if (volume == 0){
    fill(255);
    textSize(25);
    text("I AM SAD. NO SOUL TO HEAR ME PREACH", 300, 130);

}
//if volume is above zero, this messages now appears
else {
    fill(255, 220, 100);
    textSize(25);
    text("HEAR YE, LET THE CHOIR SING ITS SONG", 300, 130);
}
fill(255);
textSize(18);
text("VOLUME", 300, 230);

// draws 3 volume slider ticks/buttons
for (let i = 0; i < 3; i++){
    fill(100);
    rect(200 + i * 100, 270, 40, 10);

}

if (volume == i) {
    fill(255, 180, 50);
    rect(200 + i * 100, 270, 40, 10);

}
//volume label for each level
textSize(14);
fill(255);
text("OFF", 220, 300);
text("LOW", 220, 300);
text("HIGH", 220, 300);

//mini explication for volume control
textSize(12);
text("UP & DOWN ARROWS FOR VOLUME", 300, 350);

}
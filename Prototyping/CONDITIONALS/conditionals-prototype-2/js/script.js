/**
 * Seven deadly sins
 * antonyhatem
 * 
 * This prototype is an interactable canvas that has 7 colored circles each representing a sin that you can click. Each sin has a small description when clicked.
 */

"use strict";

let selectedSin = "";
/**
 *creates canvas
*/
function setup() {
    createCanvas(600, 400);
    
}

/**
 * background color with red circle to begin with
*/
function draw() {
    background(30);

    //red circle wrath
    fill (200, 50, 50);
    ellipse(150, 150, 70, 70);

    // detects if cursor is on circle 
    if (mouseIsPressed && 
        mouseX > 115 && mouseX < 185 &&
        mouseY > 115 && mouseY < 185) {
            selectedSin = "WRATH"; 
        

    }

    //displays sin you clicked on
    fill(255);
    textSize(30);
    textAlign(CENTER);

    if (selectedSin == "WRATH") {
        text("WRATH", 310, 310);
        textSize(18);
        text("You let your anger control you", 300, 330);
    }







}
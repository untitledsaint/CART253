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
    fill (220, 50, 50);
    ellipse(100, 100, 60, 60);

    //orange circle greed
    fill(240, 150, 30)
    ellipse(250, 100, 60, 60);

    //green circle envy
    fill (80, 230, 80);
    ellipse (400, 100, 60, 60);

    //blue circle sloth
    fill(80, 130, 230);
    ellipse(500, 220, 60, 60);

    //purple circle lust
    fill(180, 70, 180);
    ellipse(400, 320, 60, 60);

    //pink circle pride
    fill(250, 100, 150);
    ellipse(250, 320, 60, 60);

    //brown circle gluttony 
    fill(180, 120, 50);
    ellipse(100, 250, 60, 60);


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
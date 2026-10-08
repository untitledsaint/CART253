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


    // detects if cursor is on wrath circle 
    if (mouseIsPressed && 
        mouseX > 70 && mouseX < 130 &&
        mouseY > 70 && mouseY < 130) {
            selectedSin = "WRATH"; 
        

    }


    // detects if cursor is on greed circle 
    if (mouseIsPressed && 
        mouseX > 220 && mouseX < 280 &&
        mouseY > 70 && mouseY < 130) {
            selectedSin = "GREED"; 
        

    }

    // detects if cursor is on envy circle 
    if (mouseIsPressed && 
        mouseX > 370 && mouseX < 430 &&
        mouseY > 70 && mouseY < 130) {
            selectedSin = "ENVY"; 
        

    }

    // detects if cursor is on sloth circle 
    if (mouseIsPressed && 
        mouseX > 470 && mouseX < 530 &&
        mouseY > 190 && mouseY < 250) {
            selectedSin = "SLOTH"; 
        

    }

    // detects if cursor is on lust circle 
    if (mouseIsPressed && 
        mouseX > 370 && mouseX < 430 &&
        mouseY > 290 && mouseY < 350) {
            selectedSin = "LUST"; 
        

    }

    // detects if cursor is on pride circle 
    if (mouseIsPressed && 
        mouseX > 220 && mouseX < 280 &&
        mouseY > 290 && mouseY < 350) {
            selectedSin = "PRIDE"; 
        

    }

    // detects if cursor is on gluttony circle 
    if (mouseIsPressed && 
        mouseX > 70 && mouseX < 130 &&
        mouseY > 220 && mouseY < 280) {
            selectedSin = "GLUTTONY"; 
        

    }

    //displays sin you clicked on
    fill(255);
    textSize(30);
    textAlign(CENTER);
    // displays wrath name and phrase
    if (selectedSin == "WRATH") {
        text("WRATH", 300, 200);
        textSize(18);
        text("You let your anger control you", 300, 230);
    }

// displays greed name and phrase
    if (selectedSin == "GREED") {
        text("GREED", 300, 200);
        textSize(18);
        text("You always want more and more", 300, 230);
    }

// displays envy name and phrase
    if (selectedSin == "ENVY") {
        text("ENVY", 300, 200);
        textSize(18);
        text("You want what others have", 300, 230);
    }

// displays sloth name and phrase
    if (selectedSin == "SLOTH") {
        text("SLOTH", 300, 200);
        textSize(18);
        text("You never want to do anything", 300, 230);
    }


// displays lust name and phrase
    if (selectedSin == "LUST") {
        text("LUST", 300, 200);
        textSize(18);
        text("Desire and love takes control", 300, 230);
    }

// displays pride name and phrase
    if (selectedSin == "PRIDE") {
        text("PRIDE", 300, 200);
        textSize(18);
        text("You think you are better than everyone", 300, 230);
    }

// displays gluttony name and phrase
    if (selectedSin == "GLUTTONY") {
        text("GLUTTONY", 300, 200);
        textSize(18);
        text("You always want to consume more", 300, 230);
    }



}
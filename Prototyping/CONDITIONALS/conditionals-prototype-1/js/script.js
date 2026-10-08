/**
 * Ethical Pokémon gacha game
 * antonyhatem
 * 
 * This prototype is a little pokémon themed gacha game pack opening simulator. You press the red button and you get your pokemon as well as its rarity and chance percentage to fulfil your dopamine needs. Inspired by Pippin's loot drops example.
 */

"use strict";

/**
 * making the canvas for the game.
*/
function setup() {
    createCanvas(600,400);

}


/**
 * 
*/
function draw() {
    background(25, 40, 50);

    // Title of the gacha game for everyone to see
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("ETHICAL POKÉMON GACHA SIMULATOR", 300, 70);
    
    //Big red button that you're gonna have to click

    fill(220, 50, 50)
    rect(200, 120, 200, 60);

    //text on the button
    fill(255);
    text("OPEN PACK", 300, 157);
    textSize(20);

}
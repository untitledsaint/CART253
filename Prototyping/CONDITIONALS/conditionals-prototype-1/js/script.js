/**
 * Ethical Pokémon gacha game
 * antonyhatem
 * 
 * This prototype is a little pokémon themed gacha game pack opening simulator. You press the red button and you get your pokemon as well as its rarity and chance percentage to fulfil your dopamine needs. Inspired by Pippin's loot drops example.
 */

"use strict";

let pokemon = "";
let rarity = "";
let chance = "";
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

    // text displaying the pokemon you got
    textSize(32);
    text(pokemon, 300, 270);
    

    // text displaying the rarity for that pokemon
    textSize(22)
    text(rarity, 300, 305);
    

    // text displaying the drop chance % for the pokemon
     textSize(16);
    text(chance, 300, 335);
   

    // checks if cursor is within red button bounds, also when clicked makes a 0 - 100 random number

    if (mouseIsPressed &&
        mouseX > 200 && mouseX < 400 &&
        mouseY > 120 && mouseY < 180) { 

    let roll = random(100);


    // 70% chance of common pokemon

    if (roll < 70) {

        rarity = "COMMON";
        chance = "70%"

        let pokemonRoll = random(4);

        if (pokemonRoll < 1) {
            pokemon = "Bulbasaur";
        }
        else if (pokemonRoll < 2) {
            pokemon = "Charmander";
        }
        else if (pokemonRoll < 3) {
            pokemon = "Squirtle"; 
        }
        else {
            pokemon = "Pidgey";
        }
    }

    // 25% chance of rare pokemon
    else if (roll < 95) {

        rarity = "RARE";
        chance = "25%";

        let pokemonRoll = random(3);

        if (pokemonRoll < 1) {
            pokemon = "Pikachu";
        }
        else if (pokemonRoll < 2) {
            pokemon = "Eevee";

        }
        else {
            pokemon = "Gengar";
        }
    }


    // 5% chance of legendary pokemon

    else {

        rarity = "LEGENDARY";
        chance = "5%";

        let pokemonRoll = random(2);

        if (pokemonRoll < 1){
            pokemon = "Mewtwo";

        }
        else {
            pokemon = "Lugia";
        }
    }

        }


}
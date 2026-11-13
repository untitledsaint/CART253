/**
 * Dinomobile
 * antonyhatem
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";

// starts intructions
let carName = "Click to generate a car name.";
let dinosaurName = ""

/**
 * loads car and dino data
 */
async function preload() {

    carData = await loadJSON("./assets/data/cars.json");
    dinosaurData = await loadJSON("./assets/data/dinosaurs.json");

}

/**
 * makes canvas
*/
async function setup() {
    createCanvas(600, 400);

    await preload();
}

/**
 * displays current text 
*/
function draw() {
    background(45, 100, 60);

    push();
    fill("");
    textAlign(CENTER, CENTER);
    textSize(42);
    text(carName + " " + dinosaurName, width / 2, height / 2);
    pop();
}



/**
 * generates a new dino car name
 */
function mousePressed() {
    carName = random(Object.values(carData.cars));
    dinosaurName = random(Object.values(dinosaurData.dinosaurs));

}
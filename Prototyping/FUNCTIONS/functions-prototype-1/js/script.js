/**
 * seven deadly sins revamped
 * antonyhatem
 * 
 * This prototype is an interactable canvas that has 7 colored circles each representing a sin that you can click. Each sin has a small description when clicked. ALSO, this should be a more optimized version for the sake of the Functions topic.
 */

"use strict";

//stores info about all the sins
let sins = [];


function setup() {

    //makes canvas
    createCanvas(600, 400);
    // made and listed the seven deadly sins and adding them to the list
    sins.push(createSin("WRATH", "You let your anger control you", 100, 100, [220, 50, 50]));
    sins.push(createSin("GREED", "You always want more and more", 250, 100, [240, 150, 30]));
    sins.push(createSin("ENVY", "You want what other have", 400, 100, [80, 230, 80]));
    sins.push(createSin("SLOTH", "You never want to do anything", 500, 220, [80, 130, 230]));
    sins.push(createSin("LUST", "Desire and love takes control", 400, 320, [180, 70, 180]));
    sins.push(createSin("PRIDE", "You think you are better than everyone", 250, 320, [250, 100, 150]));
    sins.push(createSin("GLUTTONY", "You always want to consume more", 100, 250, [180, 120, 50]));

}
    //creates sin 
function createSin(name, description, x, y, colour) {

    //stores info for a sin
    let sin = {
        name: name,
        description: description,
        x: x,
        y: y,
        size: 60,
        colour: colour
    };
    return sin;
}

function draw(){
    background(30);
}
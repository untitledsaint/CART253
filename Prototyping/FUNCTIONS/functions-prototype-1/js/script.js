/**
 * seven deadly sins revamped
 * antonyhatem
 * 
 * This prototype is an interactable canvas that has 7 colored circles each representing a sin that you can click. Each sin has a small description when clicked. ALSO, this should be a more optimized version for the sake of the Functions topic.
 */

"use strict";

//stores info about all the sins
let sins = [];

let selectedSin = null;


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
    return sin
}
//draws handful of features that are further described
function draw(){
    //makes background color
    background(30);
    for (let sin of sins) {

        //draws current sin
        drawSin(sin);
    }
        //checks if sin is selected

    if (selectedSin !== null) {

        //displays name+description
        drawDescription(selectedSin);
    }
}
//draws sin
function drawSin(sin){
    //uses colour stored
    fill(sin.colour[0], sin.colour[1], sin.colour[2]);
    noStroke();
    //draws circle associated with its size / x-y
    ellipse(sin.x, sin.y, sin.size);
}
//functions that checks if mouse if over a sin circle
function MouseOnSin(sin) {
// calculates distance between mouse and circle middle point
    let distance = dist(mouseX, mouseY, sin.x, sin.y);

    //i think this should return "true" if the mouse in inside circle bounds?
    return distance < sin.size / 2;
}
//displays description of selected sin, along with its name in big.
function drawDescription(sin) {
    fill(255);
//centers text correctly and writes the name
    textAlign(CENTER);
    textSize(30);
    text(sin.name, 300, 200);
//writes description
    textSize(18);
    text(sin.description, 300, 230);
}
//when you click
function mousePressed() {
//checks sins 
for (let sin of sins) {
    //makes sure and checks if cursor is on circle
    if (MouseOnSin(sin)) {
        selectedSin = sin;
    }
  }
}
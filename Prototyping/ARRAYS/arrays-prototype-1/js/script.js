/**
 * Supernova
 * antonyhatem
 * 
 * This prototype serves to act as trippy visuals using thousands of circles moving in a spiral-like motion to give the effect. Colors help the experience and make it look neat. Resembles an explosion somewhere in space.
 */

"use strict";

//stores all circles in array
let circles = [];

//amount of circle present
let circleAmount = 2000;

/**
 * makes canvas
*/
function setup() {
    createCanvas(1000, 1000);
    noStroke()

    //creates circles and puts them in array 
    
    for (let i = 0; i < circleAmount; i++) {
        circles.push(createCircle(i));
  
    }
}


/**
 * draws background, circle and updates of the circle
*/
function draw() {
    background(20);

        //updates and draws every circle
    for (let circle of circles) {
        updateCircle(circle);
        drawCircle(circle);
    }
    
}
//creates circle variables for each
//also where to change desired behaviors 
//to make the spirals tighter together or circles bigger, faster
function createCircle(i) {
    return {
        angle: i * 0.15,
        distance: i * 3,
        size: random(5, 10),
        speed: random(0.5, 3)
    };
}
        //makes it so that circle turns and moves farther from middle
        //CHANGE IF YOU WANT FASTER SPIRAL
    function updateCircle(circle) {
        circle.angle += 0.01;
        circle.distance += circle.speed;

        //resets circle position if it goes too far from center position
    if (circle.distance > 600) {
        circle.distance = 0;
    }
}
    
    
    // angle and distance to track circle position + draws circle
    function drawCircle(circle) {
    let x = 500 + cos(circle.angle) * circle.distance;
    let y = 500 + sin(circle.angle) * circle.distance;

    //changes colour depending on distance of the circle
    let colour = map(circle.distance, 0, 500, 50, 255);

    //draws circle
    fill(colour, 100, 255);
    ellipse(x, y, circle.size);

}



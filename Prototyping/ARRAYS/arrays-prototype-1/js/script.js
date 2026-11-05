/**
 * Title of Project
 * antonyhatem
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//stores all circles in array
let circles = [];

//amount of circle present
let circleAmount = 40;

/**
 * makes canvas
*/
function setup() {
    createCanvas(1000, 1000);

    //creates circles and puts them in array
    for (let i = 0; i < circleAmount; i++) {
        circles.push({
            angle: i * 0.15,
            distance: i * 10
        });
    }
}


/**
 * draws background, circle and updates of the circle
*/
function draw() {
    background(25);

    for (let circle of circles) {


        //makes it so that circle turns and moves farther from middle
        circle.angle += 0.03;
        circle.distance += 1;
    
    

    //resets circle position if it goes too far from center position
    if (circle.distance > 500){
        circle.distance = 0;
    }
    
    // angle and distance to track circle position
    let x = 500 + cos(circle.angle) * circle.distance;
    let y = 500 + sin(circle.angle) * circle.distance;

    //draws circle
    fill(255);
    ellipse(x, y, 10);

}

}